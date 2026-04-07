# Checklist de Padronizacao de Nomes

Este checklist segue o padrao adotado no branch `cursor/estrutura-backend-inicial-d289`.

## 1) Estrutura de pastas por modulo

- [ ] Cada modulo em `backend/src/modules/<nome-modulo-em-portugues>/`
- [ ] Subpastas padrao: `dto/`, `schemas/`
- [ ] Arquivos base do modulo:
  - [ ] `<modulo>.controller.ts`
  - [ ] `<modulo>.service.ts`
  - [ ] `<modulo>.module.ts`

## 2) Nomes de classes (PascalCase)

- [ ] Entidades/schemas em portugues e singular (ex.: `Atendimento`, `Anamnese`, `Paciente`)
- [ ] Controller/Service/Module no plural do modulo (ex.: `AtendimentosController`)
- [ ] Classes auxiliares de dominio em portugues (ex.: `SinaisVitais`, `HipoteseDiagnostica`)

## 3) Nomes de DTOs

- [ ] DTO de criacao: `Create<Entidade>Dto`
- [ ] DTO de atualizacao: `Update<Entidade>Dto`
- [ ] DTOs internos aninhados: `<NomeDominio>Dto` em portugues
- [ ] Arquivos DTO em kebab-case:
  - [ ] `create-atendimento.dto.ts`
  - [ ] `update-atendimento.dto.ts`
  - [ ] `contato.dto.ts`

## 4) Nomes de Schema e Document type

- [ ] Arquivo schema: `<entidade>.schema.ts`
- [ ] Classe schema: `<Entidade>`
- [ ] Type alias Mongoose: `<Entidade>Document`

## 5) Constantes e tipos derivados

- [ ] Constantes em `ALL_CAPS` (plural quando lista):
  - [ ] `TIPOS_ATENDIMENTO`
  - [ ] `STATUS_ATENDIMENTO`
- [ ] Type union derivado em PascalCase:
  - [ ] `TipoAtendimento`
  - [ ] `StatusAtendimento`
- [ ] Valores de enum em portugues e snake_case:
  - [ ] `primeira_consulta`, `em_andamento`, `controle_especial`

## 6) Campos de classe/propriedades

- [ ] Campos de dominio em portugues
- [ ] Campos persistidos em `snake_case`
- [ ] IDs com sufixo `_id` (ex.: `paciente_id`, `profissional_id`, `local_atendimento_id`)
- [ ] Sem acentos em identificadores (`convenio`, nao `convênio`)

## 7) Consistencia entre camadas

- [ ] Mesmo conceito com o mesmo nome em DTO, schema, service e controller
- [ ] Evitar variacoes para o mesmo campo sem justificativa
- [ ] Revisar singular/plural por contexto:
  - [ ] entidade singular
  - [ ] modulo/controller plural

## 8) Barrel files (`index.ts`)

- [ ] Exportar DTOs/schemas comuns por `index.ts` quando fizer sentido
- [ ] Garantir alinhamento dos nomes exportados com este checklist

## Regra-resumo

- Dominio em portugues
- Classes em PascalCase
- Arquivos em kebab-case
- Campos em snake_case
- DTOs com `Create/Update` + `Dto`
- Tipos de documento como `<Entidade>Document`
- Constantes de enum em `ALL_CAPS` + type derivado em PascalCase
