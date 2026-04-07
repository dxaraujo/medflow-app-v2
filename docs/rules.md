# Regras de Codificação e Estilo — MedFlow Backend

---

## Stack Tecnológico

- **Runtime:** Node.js 20+
- **Framework:** NestJS 10+ com TypeScript
- **Banco de dados:** MongoDB 7+ via Mongoose
- **Linguagem:** TypeScript 5+ (strict mode)
- **Testes:** Jest + Supertest
- **Documentação API:** Swagger (via `@nestjs/swagger`)
- **Validação:** class-validator + class-transformer

---

## Estrutura de Pastas

```
src/
├── common/                    # Utilitários, decorators, pipes, filtros globais
│   ├── schemas/               # Sub-documentos reutilizáveis (DataInfo, Endereco, Contato)
│   ├── dto/                   # DTOs compartilhados
│   ├── pipes/                 # Pipes customizados (ex: ParseObjectIdPipe)
│   ├── filters/               # Exception filters
│   └── helpers/               # Funções utilitárias (ex: buildDataInfo)
├── modules/
│   ├── pacientes/
│   │   ├── pacientes.module.ts
│   │   ├── pacientes.controller.ts
│   │   ├── pacientes.service.ts
│   │   ├── schemas/
│   │   │   └── paciente.schema.ts
│   │   └── dto/
│   │       ├── create-paciente.dto.ts
│   │       └── update-paciente.dto.ts
│   ├── profissionais/
│   ├── locais-atendimento/
│   ├── convenios/
│   ├── anamneses/
│   ├── atendimentos/
│   ├── agendamentos/
│   ├── fila-espera/
│   ├── lancamentos-receita/
│   └── contas-pagar/
├── app.module.ts
└── main.ts
```

---

## Convenções de Nomenclatura

| Elemento | Convenção | Exemplo |
|---|---|---|
| Arquivos | kebab-case | `pacientes.controller.ts` |
| Classes | PascalCase | `PacientesService` |
| Métodos/variáveis | camelCase | `findByCpf`, `nomeCompleto` |
| Constantes | UPPER_SNAKE_CASE | `MAX_PAGE_SIZE` |
| Campos MongoDB | snake_case | `nome_completo`, `data_nascimento` |
| Enums TypeScript | PascalCase (tipo) + UPPER_SNAKE_CASE (valores) | `TipoAtendimento.CONSULTA` |

---

## Regras Gerais

1. **Strict TypeScript** — Não usar `any`. Tipar todas as entradas e saídas.
2. **Validação** — Todo DTO deve usar decorators de `class-validator`.
3. **DTOs separados** — `CreateXxxDto` e `UpdateXxxDto` (via `PartialType`).
4. **Swagger** — Anotar todos os endpoints e DTOs com `@nestjs/swagger`.
5. **Tratamento de erros** — Usar exceptions do NestJS (`NotFoundException`, `BadRequestException`, etc.)
6. **Paginação** — Padrão `page` + `limit` com `limit` máximo de 100.
7. **Soft delete** — Usar campo `ativo: boolean` ao invés de deletar registros.
8. **Sem lógica no controller** — Controllers apenas delegam para services.
9. **Injeção de dependência** — Sempre via construtor.
10. **Imutabilidade de atendimentos** — Após status `finalizado`, não permitir edição.

---

## Padrões de API REST

| Operação | Método | Rota | Status Code |
|---|---|---|---|
| Listar (paginado) | GET | `/api/{recurso}` | 200 |
| Buscar por ID | GET | `/api/{recurso}/:id` | 200 / 404 |
| Criar | POST | `/api/{recurso}` | 201 |
| Atualizar | PATCH | `/api/{recurso}/:id` | 200 / 404 |
| Remover (soft) | DELETE | `/api/{recurso}/:id` | 200 / 404 |

Prefixo global: `/api`

---

## Validação de Campos Comuns

- **CPF**: 11 dígitos, validação de algoritmo
- **CEP**: formato `00000-000`
- **Telefone**: com DDD
- **Duração (minutos)**: múltiplo de 5, entre 5 e 120
- **ObjectId**: validar formato antes de queries

---

## Testes

- Testes unitários para services (`.spec.ts`)
- Testes e2e para controllers (`test/*.e2e-spec.ts`)
- Mínimo de cobertura: regras de negócio críticas
