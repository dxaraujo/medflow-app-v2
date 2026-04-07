# MedFlow — Sistema de Gerenciamento de Consultório Médico

Aplicação fullstack para gerenciamento completo de consultórios médicos, incluindo agendamento, prontuário eletrônico, fila de espera e controle financeiro.

## Stack

| Camada | Tecnologia |
|---|---|
| **Backend** | NestJS + TypeScript |
| **Banco de Dados** | MongoDB (via Mongoose) |
| **Frontend** | React (futuro) |

## Estrutura do Projeto

```
/
├── backend/               # API NestJS
│   └── src/
│       ├── common/        # Schemas, DTOs e helpers compartilhados
│       └── modules/       # Módulos de domínio (10 módulos)
├── docs/
│   ├── rules.md           # Regras de codificação e estilo
│   ├── arch.md            # Arquitetura e fluxos de dados
│   ├── api.md             # Contratos de API / Endpoints
│   ├── database.md        # Esquema do banco de dados
│   └── features/          # Documentação de features
└── README.md
```

## Módulos

| Módulo | Descrição |
|---|---|
| Pacientes | Cadastro demográfico e administrativo |
| Profissionais | Médicos e atendentes |
| Locais de Atendimento | Consultórios e configuração de agenda |
| Convênios | Planos de saúde e tabelas de procedimentos |
| Anamneses | Histórico clínico do paciente (1:1) |
| Atendimentos | Registro de evolução clínica por consulta |
| Agendamentos | Grade de agenda com bloqueios |
| Fila de Espera | Fluxo operacional do dia (TTL 48h) |
| Lançamentos de Receita | Controle de recebimentos |
| Contas a Pagar | Controle de despesas |

## Pré-requisitos

- Node.js 20+
- MongoDB 7+
- npm 10+

## Instalação

```bash
cd backend
npm install
```

## Configuração

Copie o arquivo de exemplo e ajuste as variáveis:

```bash
cp .env.example .env
```

Variáveis disponíveis:

| Variável | Descrição | Default |
|---|---|---|
| `MONGODB_URI` | URI de conexão MongoDB | `mongodb://localhost:27017/medflow` |
| `PORT` | Porta da aplicação | `3000` |

## Execução

```bash
# Desenvolvimento
cd backend
npm run start:dev

# Produção
npm run build
npm run start:prod
```

## API

Swagger UI disponível em: `http://localhost:3000/api/docs`

Prefixo de todas as rotas: `/api`

## Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura
npm run test:cov
```

## Documentação

- [Regras de Codificação](docs/rules.md)
- [Arquitetura](docs/arch.md)
- [Contratos de API](docs/api.md)
- [Esquema do Banco](docs/database.md)
- [Modelo MongoDB Original](docs/features/modelo-mongodb-consultorio-medico.md)
