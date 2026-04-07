# Feature: Gestão de Pacientes

## Descrição
Módulo de cadastro e gerenciamento de pacientes do consultório médico.

## Funcionalidades

### Cadastro de Paciente
- Dados pessoais obrigatórios: nome, sobrenome, CPF, data de nascimento, gênero, telefone
- Dados opcionais: email, endereço, convênio, contato de emergência, tipo sanguíneo, alergias
- CPF validado e único no sistema

### Listagem de Pacientes
- Paginação com limite configurável
- Busca por nome ou CPF
- Filtro por status (ativo/inativo)

### Visualização de Paciente
- Dados completos do paciente
- Histórico de consultas vinculado
- Prontuários vinculados

### Atualização de Paciente
- Atualização parcial (PATCH)
- CPF não pode ser alterado após cadastro

### Desativação de Paciente
- Soft delete (isActive = false)
- Paciente desativado não pode ter novas consultas agendadas
- Histórico é mantido

## Regras de Negócio
1. CPF deve ser válido (algoritmo de validação)
2. Data de nascimento não pode ser futura
3. Telefone deve ter formato válido
4. CEP deve ter formato válido (00000-000)
5. Não é possível excluir paciente com consultas futuras agendadas
6. Paciente menor de 18 anos deve ter contato de emergência
