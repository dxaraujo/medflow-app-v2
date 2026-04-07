# Feature: Prontuários Médicos

## Descrição
Módulo de prontuário eletrônico do paciente, registrando todas as informações clínicas do atendimento.

## Funcionalidades

### Criar Prontuário
- Vinculação obrigatória: paciente e médico
- Vinculação opcional: agendamento
- Registro de anamnese, exame físico, diagnóstico
- Registro de sinais vitais
- Códigos CID-10 vinculados
- Conduta/tratamento

### Listar Prontuários
- Filtros: paciente, médico, período
- Paginação
- Ordenação por data (mais recente primeiro)

### Histórico do Paciente
- Listagem cronológica de todos os atendimentos
- Visualização completa de cada prontuário

### Atualizar Prontuário
- Somente o médico que criou pode editar
- Apenas no mesmo dia da criação (após 24h, vira somente leitura)

## Regras de Negócio
1. Somente médicos podem criar prontuários
2. Paciente deve existir e estar ativo
3. Se vinculado a agendamento, o status deve ser `in_progress` ou `completed`
4. Prontuário não pode ser excluído (imutável após 24h)
5. Sinais vitais devem estar em faixas válidas:
   - Frequência cardíaca: 30-250 bpm
   - Temperatura: 30-45 °C
   - Saturação de O2: 0-100%
   - Frequência respiratória: 5-60 irpm
6. CID-10 deve ser um código válido
