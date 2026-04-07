# MedFlow - Arquitetura e Fluxos de Dados

## Visão Geral

O MedFlow é um sistema de gerenciamento de consultório médico composto por:

- **Backend API**: NestJS (Node.js) com TypeScript
- **Banco de Dados**: MongoDB (NoSQL)
- **Frontend** (futuro): React com TypeScript

## Arquitetura do Backend

```
┌─────────────────────────────────────────────────────────┐
│                      Client (React)                      │
└──────────────────────────┬──────────────────────────────┘
                           │ HTTP/REST
┌──────────────────────────▼──────────────────────────────┐
│                    NestJS API Server                      │
│  ┌─────────────────────────────────────────────────────┐ │
│  │                   Guards (JWT Auth)                  │ │
│  ├─────────────────────────────────────────────────────┤ │
│  │                  Interceptors (Logging)              │ │
│  ├─────────────────────────────────────────────────────┤ │
│  │                    Controllers                       │ │
│  │  ┌──────┐ ┌─────────┐ ┌────────┐ ┌──────────────┐  │ │
│  │  │ Auth │ │ Patients│ │Doctors │ │ Appointments │  │ │
│  │  └──┬───┘ └────┬────┘ └───┬────┘ └──────┬───────┘  │ │
│  ├─────┼──────────┼──────────┼─────────────┼──────────┤ │
│  │                    Services                          │ │
│  │  ┌──────┐ ┌─────────┐ ┌────────┐ ┌──────────────┐  │ │
│  │  │ Auth │ │ Patients│ │Doctors │ │ Appointments │  │ │
│  │  └──┬───┘ └────┬────┘ └───┬────┘ └──────┬───────┘  │ │
│  ├─────┼──────────┼──────────┼─────────────┼──────────┤ │
│  │                 Mongoose Models                      │ │
│  └─────────────────────┬───────────────────────────────┘ │
└────────────────────────┼────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                      MongoDB                             │
│  ┌───────┐ ┌──────────┐ ┌─────────┐ ┌──────────────┐   │
│  │ users │ │ patients │ │ doctors │ │ appointments │   │
│  └───────┘ └──────────┘ └─────────┘ └──────────────┘   │
│  ┌─────────────────┐ ┌──────────────┐                   │
│  │ medical-records │ │ prescriptions│                   │
│  └─────────────────┘ └──────────────┘                   │
└─────────────────────────────────────────────────────────┘
```

## Módulos Principais

### 1. Auth Module
- Registro e login de usuários do sistema
- JWT para autenticação stateless
- Roles: `admin`, `doctor`, `receptionist`
- Guards para proteção de rotas

### 2. Users Module
- CRUD de usuários do sistema (admin, médicos, recepcionistas)
- Gerenciamento de perfis e permissões

### 3. Patients Module
- Cadastro completo de pacientes
- Dados pessoais, contato, endereço, convênio
- Histórico de consultas vinculado

### 4. Doctors Module
- Cadastro de médicos com especialidades
- CRM e dados profissionais
- Horários de atendimento disponíveis

### 5. Appointments Module
- Agendamento, reagendamento e cancelamento de consultas
- Verificação de conflitos de horário
- Status: `scheduled`, `confirmed`, `in_progress`, `completed`, `cancelled`, `no_show`

### 6. Medical Records Module
- Prontuário eletrônico do paciente
- Anamnese, exame físico, hipótese diagnóstica
- CID-10 vinculado
- Evolução clínica

### 7. Prescriptions Module
- Prescrições médicas vinculadas ao prontuário
- Medicamentos, posologia, duração
- Impressão/exportação

## Fluxos de Dados Principais

### Fluxo de Agendamento

```
1. Recepcionista acessa sistema (login)
2. Busca paciente ou cadastra novo
3. Seleciona médico e especialidade
4. Verifica horários disponíveis
5. Cria agendamento
6. Paciente é notificado (futuro)
```

### Fluxo de Consulta

```
1. Médico acessa sistema (login)
2. Visualiza agenda do dia
3. Inicia atendimento (status → in_progress)
4. Registra prontuário (anamnese, exame, diagnóstico)
5. Emite prescrição (se necessário)
6. Finaliza consulta (status → completed)
```

### Fluxo de Autenticação

```
1. Usuário envia credenciais (POST /auth/login)
2. Backend valida credenciais no MongoDB
3. Gera JWT token (access + refresh)
4. Cliente armazena token
5. Requests subsequentes enviam token no header Authorization
6. Guard valida token e extrai role do usuário
```

## Comunicação entre Módulos

- **Appointments → Patients**: Valida existência do paciente
- **Appointments → Doctors**: Valida existência e disponibilidade do médico
- **Medical Records → Patients**: Vincula prontuário ao paciente
- **Medical Records → Doctors**: Registra médico responsável
- **Medical Records → Appointments**: Vincula à consulta
- **Prescriptions → Medical Records**: Vincula prescrição ao prontuário
- **Prescriptions → Doctors**: Registra médico prescritor
