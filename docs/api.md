# Contratos de API — MedFlow Backend

> Prefixo global: `/api`  
> Content-Type: `application/json`  
> Documentação interativa: `/api/docs` (Swagger UI)

---

## Padrão de Resposta

### Sucesso (lista paginada)
```json
{
  "data": [...],
  "total": 150,
  "page": 1,
  "limit": 20,
  "totalPages": 8
}
```

### Sucesso (item único)
```json
{
  "_id": "...",
  "nome_completo": "...",
  ...
}
```

### Erro
```json
{
  "statusCode": 400,
  "message": "Mensagem descritiva",
  "error": "Bad Request"
}
```

---

## 1. Pacientes

| Método | Rota | Descrição | Status |
|---|---|---|---|
| GET | `/api/pacientes` | Listar (paginado, filtros: nome, cpf, ativo) | 200 |
| GET | `/api/pacientes/:id` | Buscar por ID | 200 / 404 |
| POST | `/api/pacientes` | Criar paciente | 201 |
| PATCH | `/api/pacientes/:id` | Atualizar paciente | 200 / 404 |
| DELETE | `/api/pacientes/:id` | Desativar (soft delete) | 200 / 404 |

---

## 2. Profissionais

| Método | Rota | Descrição | Status |
|---|---|---|---|
| GET | `/api/profissionais` | Listar (filtros: perfil, ativo) | 200 |
| GET | `/api/profissionais/:id` | Buscar por ID | 200 / 404 |
| POST | `/api/profissionais` | Criar profissional | 201 |
| PATCH | `/api/profissionais/:id` | Atualizar profissional | 200 / 404 |
| DELETE | `/api/profissionais/:id` | Desativar | 200 / 404 |

---

## 3. Locais de Atendimento

| Método | Rota | Descrição | Status |
|---|---|---|---|
| GET | `/api/locais-atendimento` | Listar | 200 |
| GET | `/api/locais-atendimento/:id` | Buscar por ID | 200 / 404 |
| POST | `/api/locais-atendimento` | Criar local | 201 |
| PATCH | `/api/locais-atendimento/:id` | Atualizar local | 200 / 404 |
| DELETE | `/api/locais-atendimento/:id` | Desativar | 200 / 404 |

---

## 4. Convênios

| Método | Rota | Descrição | Status |
|---|---|---|---|
| GET | `/api/convenios` | Listar | 200 |
| GET | `/api/convenios/:id` | Buscar por ID | 200 / 404 |
| POST | `/api/convenios` | Criar convênio | 201 |
| PATCH | `/api/convenios/:id` | Atualizar convênio | 200 / 404 |
| DELETE | `/api/convenios/:id` | Desativar | 200 / 404 |

---

## 5. Anamneses

| Método | Rota | Descrição | Status |
|---|---|---|---|
| GET | `/api/anamneses/paciente/:pacienteId` | Buscar anamnese do paciente | 200 / 404 |
| POST | `/api/anamneses` | Criar anamnese | 201 |
| PATCH | `/api/anamneses/:id` | Atualizar (com log de histórico) | 200 / 404 |

---

## 6. Atendimentos

| Método | Rota | Descrição | Status |
|---|---|---|---|
| GET | `/api/atendimentos` | Listar (filtros: paciente, profissional, período, status) | 200 |
| GET | `/api/atendimentos/:id` | Buscar por ID | 200 / 404 |
| POST | `/api/atendimentos` | Criar atendimento | 201 |
| PATCH | `/api/atendimentos/:id` | Atualizar (apenas se não finalizado) | 200 / 400 / 404 |

---

## 7. Agendamentos

| Método | Rota | Descrição | Status |
|---|---|---|---|
| GET | `/api/agendamentos` | Listar (filtros: profissional, local, data, tipo, status) | 200 |
| GET | `/api/agendamentos/:id` | Buscar por ID | 200 / 404 |
| POST | `/api/agendamentos` | Criar agendamento/bloqueio | 201 |
| PATCH | `/api/agendamentos/:id` | Atualizar status/dados | 200 / 404 |
| DELETE | `/api/agendamentos/:id` | Cancelar | 200 / 404 |

---

## 8. Fila de Espera

| Método | Rota | Descrição | Status |
|---|---|---|---|
| GET | `/api/fila-espera` | Listar fila ativa (filtros: profissional, local, status) | 200 |
| POST | `/api/fila-espera` | Check-in | 201 |
| PATCH | `/api/fila-espera/:id` | Atualizar status | 200 / 404 |

---

## 9. Lançamentos de Receita

| Método | Rota | Descrição | Status |
|---|---|---|---|
| GET | `/api/lancamentos-receita` | Listar (filtros: período, categoria, status) | 200 |
| GET | `/api/lancamentos-receita/:id` | Buscar por ID | 200 / 404 |
| POST | `/api/lancamentos-receita` | Criar lançamento | 201 |
| PATCH | `/api/lancamentos-receita/:id` | Atualizar | 200 / 404 |

---

## 10. Contas a Pagar

| Método | Rota | Descrição | Status |
|---|---|---|---|
| GET | `/api/contas-pagar` | Listar (filtros: status, período, categoria) | 200 |
| GET | `/api/contas-pagar/:id` | Buscar por ID | 200 / 404 |
| POST | `/api/contas-pagar` | Criar conta | 201 |
| PATCH | `/api/contas-pagar/:id` | Atualizar | 200 / 404 |
| DELETE | `/api/contas-pagar/:id` | Cancelar | 200 / 404 |

---

## Parâmetros de Paginação

| Parâmetro | Tipo | Default | Descrição |
|---|---|---|---|
| `page` | number | 1 | Página atual |
| `limit` | number | 20 | Itens por página (máx: 100) |

---

## Parâmetros de Busca Comuns

| Parâmetro | Tipo | Descrição |
|---|---|---|
| `search` | string | Busca textual (nome, etc.) |
| `ativo` | boolean | Filtrar por status ativo |
| `dataInicio` | ISO date | Filtro de período (início) |
| `dataFim` | ISO date | Filtro de período (fim) |
