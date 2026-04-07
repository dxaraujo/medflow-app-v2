# Feature: Agendamento de Consultas

## Descrição
Módulo de agendamento, gerenciamento e acompanhamento de consultas médicas.

## Funcionalidades

### Criar Agendamento
- Selecionar paciente, médico, data/hora e tipo de consulta
- Validação de conflito de horário do médico
- Validação de disponibilidade no horário de trabalho do médico
- Cálculo automático do horário de término

### Listar Agendamentos
- Filtros: médico, paciente, status, período (data início/fim)
- Paginação
- Ordenação por data/hora

### Atualizar Status
- Transições de status válidas:
  - `scheduled` → `confirmed`, `cancelled`, `no_show`
  - `confirmed` → `in_progress`, `cancelled`, `no_show`
  - `in_progress` → `completed`
  - `completed` → (estado final)
  - `cancelled` → (estado final)
  - `no_show` → `scheduled` (reagendamento)

### Cancelar Consulta
- Registra motivo do cancelamento
- Registra data/hora do cancelamento
- Libera o horário na agenda do médico

### Reagendar Consulta
- Cancela consulta atual e cria nova
- Mantém referência à consulta original

## Regras de Negócio
1. Não é possível agendar no passado
2. Não é possível agendar fora do horário de trabalho do médico
3. Não é possível agendar em horário já ocupado
4. Intervalo mínimo entre agendamento e consulta: 1 hora
5. Cancelamento deve ter motivo obrigatório
6. Paciente não pode ter duas consultas no mesmo horário
7. Médico inativo não pode receber novos agendamentos
8. Paciente inativo não pode ter novos agendamentos
