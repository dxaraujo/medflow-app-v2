# Feature: Gestão de Médicos

## Descrição
Módulo de cadastro e gerenciamento de médicos com suas especialidades e horários de atendimento.

## Funcionalidades

### Cadastro de Médico
- Vinculação com conta de usuário do sistema (userId)
- Dados obrigatórios: nome, CRM, especialidades, email
- Configuração de horários de atendimento (dias da semana + intervalos)
- Duração padrão de consulta (default: 30 min)

### Listagem de Médicos
- Paginação com limite configurável
- Filtro por especialidade
- Filtro por status (ativo/inativo)

### Horários Disponíveis
- Consulta de slots livres para uma data específica
- Calcula automaticamente os intervalos baseado na duração da consulta
- Subtrai horários já agendados

### Atualização de Médico
- Atualização parcial (PATCH)
- CRM não pode ser alterado após cadastro

### Desativação de Médico
- Soft delete (isActive = false)
- Consultas futuras devem ser reagendadas

## Regras de Negócio
1. CRM deve ser único e no formato válido (CRM/UF XXXXXX)
2. Deve ter pelo menos uma especialidade
3. Horários de atendimento não podem ter sobreposição no mesmo dia
4. Duração mínima de consulta: 15 minutos
5. Duração máxima de consulta: 120 minutos
6. Não é possível desativar médico com consultas futuras confirmadas
