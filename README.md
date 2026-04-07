# MedFlow - Sistema de Gerenciamento de Consultório Médico

Sistema fullstack para gerenciamento de consultório médico, com backend em NestJS (TypeScript), banco MongoDB e frontend React (futuro).

## Estrutura do Projeto

```
/medflow-app-v2
├── /backend              # API NestJS + TypeScript + MongoDB
│   ├── /src
│   │   ├── /config       # Configurações da aplicação
│   │   ├── /common       # Decorators, guards, filters, pipes, DTOs compartilhados
│   │   ├── /modules
│   │   │   ├── /auth             # Autenticação JWT e autorização RBAC
│   │   │   ├── /users            # Gestão de usuários do sistema
│   │   │   ├── /patients         # Cadastro e gestão de pacientes
│   │   │   ├── /doctors          # Cadastro de médicos e horários
│   │   │   ├── /appointments     # Agendamento de consultas
│   │   │   ├── /medical-records  # Prontuários eletrônicos
│   │   │   └── /prescriptions    # Prescrições médicas
│   │   └── /shared       # Utilitários compartilhados
│   └── /test
├── /docs                 # Documentação do projeto
│   ├── rules.md          # Regras de codificação e estilo
│   ├── arch.md           # Arquitetura e fluxos de dados
│   ├── api.md            # Contratos de API / Endpoints
│   ├── database.md       # Esquema do banco de dados
│   └── /features         # Documentação por feature
│       ├── auth.md
│       ├── patients.md
│       ├── doctors.md
│       ├── appointments.md
│       ├── medical-records.md
│       └── prescriptions.md
└── /frontend (futuro)    # React + TypeScript
```

## Tecnologias

### Backend
- **NestJS** - Framework Node.js com TypeScript
- **MongoDB** + **Mongoose** - Banco de dados NoSQL
- **JWT** - Autenticação stateless
- **Passport** - Estratégias de autenticação
- **class-validator** / **class-transformer** - Validação de DTOs
- **Swagger/OpenAPI** - Documentação interativa da API

## Pré-requisitos

- Node.js 18+
- MongoDB 6+
- npm ou yarn

## Instalação e Execução

```bash
# Instalar dependências
cd backend
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com suas configurações

# Executar em modo de desenvolvimento
npm run start:dev

# Build para produção
npm run build
npm run start:prod
```

## Documentação da API

Com o servidor rodando, acesse:
- **Swagger UI**: http://localhost:3000/api/docs
- **API Base URL**: http://localhost:3000/api/v1

## Módulos

| Módulo | Descrição |
|--------|-----------|
| **Auth** | Registro, login, refresh token, perfil |
| **Users** | CRUD de usuários do sistema |
| **Patients** | Cadastro e gestão de pacientes |
| **Doctors** | Cadastro de médicos, especialidades, horários |
| **Appointments** | Agendamento, status, cancelamento de consultas |
| **Medical Records** | Prontuário eletrônico com CID-10 |
| **Prescriptions** | Prescrições médicas com posologia |

## Roles e Permissões

| Role | Descrição |
|------|-----------|
| `admin` | Acesso total ao sistema |
| `doctor` | Consultas, prontuários, prescrições |
| `receptionist` | Agendamentos, pacientes, médicos |
