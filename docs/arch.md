# Arquitetura — MedFlow Backend

---

## Visão Geral

Aplicação backend monolítica modular construída com **NestJS** (TypeScript), persistindo dados em **MongoDB** via **Mongoose**. Cada domínio de negócio é um módulo NestJS independente.

```
┌─────────────────────────────────────────────┐
│                  Cliente                    │
│            (React — futuro)                 │
└──────────────────┬──────────────────────────┘
                   │ HTTP/REST (JSON)
┌──────────────────▼──────────────────────────┐
│              NestJS API                     │
│  ┌──────────┬──────────┬──────────────────┐ │
│  │Controller│  Service │    Schema/DTO    │ │
│  │  (REST)  │(Business)│   (Mongoose)     │ │
│  └──────────┴──────────┴──────────────────┘ │
│                                             │
│  Modules:                                   │
│  ├── Pacientes                              │
│  ├── Profissionais                          │
│  ├── Locais de Atendimento                  │
│  ├── Convênios                              │
│  ├── Anamneses                              │
│  ├── Atendimentos                           │
│  ├── Agendamentos                           │
│  ├── Fila de Espera                         │
│  ├── Lançamentos Receita                    │
│  └── Contas a Pagar                         │
└──────────────────┬──────────────────────────┘
                   │ Mongoose ODM
┌──────────────────▼──────────────────────────┐
│               MongoDB                       │
│         (10 collections)                    │
└─────────────────────────────────────────────┘
```

---

## Camadas

### 1. Controller
- Recebe requisições HTTP
- Valida entrada via DTOs (class-validator)
- Delega para o Service
- Retorna resposta HTTP com status code adequado

### 2. Service
- Contém toda a lógica de negócio
- Interage com o Model do Mongoose
- Lança exceções HTTP do NestJS quando necessário
- Responsável por validações complexas (ex: overlap de horários)

### 3. Schema (Mongoose)
- Define a estrutura do documento MongoDB
- Configura índices, defaults e validações a nível de banco
- Sub-documentos reutilizáveis (`DataInfo`, `Endereco`, `Contato`) ficam em `common/schemas/`

### 4. DTO (Data Transfer Object)
- Define o contrato de entrada da API
- Decorators de validação (`@IsString`, `@IsEnum`, etc.)
- Decorators de documentação Swagger (`@ApiProperty`)
- `CreateXxxDto` para criação, `UpdateXxxDto` (PartialType) para atualização

---

## Fluxos de Dados Principais

### Fluxo de Consulta (Happy Path)

```
1. Agendamento criado (status: agendado)
2. Paciente faz check-in → Fila de Espera (status: aguardando)
3. Agendamento → status: em_espera
4. Chamado → Fila (status: em_atendimento), Agendamento (status: em_atendimento)
5. Atendimento criado (status: em_andamento)
6. Médico finaliza → Atendimento (status: finalizado)
7. Agendamento → status: finalizado
8. Fila → status: atendido
9. Lançamento de receita criado
```

### Fluxo Financeiro

```
Atendimento finalizado
  ├── Particular → lancamentos_receita (dados_particular)
  └── Convênio   → lancamentos_receita (dados_convenio + status_faturamento)

Despesas operacionais → contas_pagar (independente)

Dashboard = agregação de lancamentos_receita + contas_pagar
```

---

## Módulos e Dependências

```
AppModule
├── MongooseModule.forRoot(...)
├── PacientesModule
├── ProfissionaisModule
├── LocaisAtendimentoModule
├── ConveniosModule
├── AnamnesesModule         → PacientesModule, ProfissionaisModule
├── AtendimentosModule      → PacientesModule, ProfissionaisModule, LocaisAtendimentoModule
├── AgendamentosModule      → PacientesModule, ProfissionaisModule, LocaisAtendimentoModule
├── FilaEsperaModule        → PacientesModule, ProfissionaisModule, AgendamentosModule
├── LancamentosReceitaModule → AtendimentosModule, PacientesModule, ConveniosModule
└── ContasPagarModule
```

---

## Configuração de Ambiente

Variáveis de ambiente via `@nestjs/config`:

| Variável | Descrição | Default |
|---|---|---|
| `MONGODB_URI` | URI de conexão MongoDB | `mongodb://localhost:27017/medflow` |
| `PORT` | Porta da aplicação | `3000` |
| `NODE_ENV` | Ambiente | `development` |

---

## Segurança (Futuro)

- Autenticação JWT (módulo futuro)
- CORS configurado
- Helmet para headers de segurança
- Rate limiting

---

## Observabilidade

- Logs estruturados via Logger do NestJS
- Health checks (`/api/health`)
- Swagger UI disponível em `/api/docs`
