# Feature: Prescrições Médicas

## Descrição
Módulo de prescrição médica vinculado ao prontuário do paciente.

## Funcionalidades

### Criar Prescrição
- Vinculação obrigatória: prontuário, paciente, médico
- Lista de medicamentos com posologia completa
- Via de administração
- Instruções específicas por medicamento
- Observações gerais

### Listar Prescrições
- Filtros: paciente, médico
- Paginação
- Ordenação por data

### Prescrições por Paciente
- Histórico completo de prescrições do paciente
- Filtro por prescrições ativas

### Atualizar Prescrição
- Somente o médico prescritor pode editar
- Apenas no mesmo dia da criação

## Regras de Negócio
1. Somente médicos podem criar prescrições
2. Deve ter pelo menos um item (medicamento)
3. Prontuário deve existir
4. Paciente e médico devem ser os mesmos do prontuário
5. Prescrição não pode ser excluída, apenas desativada
6. Cada item deve ter: medicamento, dosagem, frequência e duração preenchidos
7. Via de administração padrão: oral
