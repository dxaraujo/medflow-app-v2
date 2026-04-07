# MedFlow - Contratos de API / Endpoints

## Base URL

```
http://localhost:3000/api/v1
```

## Autenticação

Todos os endpoints (exceto login e registro) requerem JWT Bearer token no header:

```
Authorization: Bearer <token>
```

---

## Auth Module

### POST /auth/register
Registra um novo usuário no sistema.

**Acesso**: `admin`

**Body**:
```json
{
  "email": "medico@medflow.com",
  "password": "senhaSegura123",
  "name": "Dr. João Silva",
  "role": "doctor"
}
```

**Response** `201`:
```json
{
  "statusCode": 201,
  "message": "Usuário registrado com sucesso",
  "data": {
    "_id": "...",
    "email": "medico@medflow.com",
    "name": "Dr. João Silva",
    "role": "doctor"
  }
}
```

### POST /auth/login
Autentica um usuário e retorna tokens JWT.

**Body**:
```json
{
  "email": "medico@medflow.com",
  "password": "senhaSegura123"
}
```

**Response** `200`:
```json
{
  "statusCode": 200,
  "message": "Login realizado com sucesso",
  "data": {
    "accessToken": "eyJhbG...",
    "refreshToken": "eyJhbG...",
    "user": {
      "_id": "...",
      "email": "medico@medflow.com",
      "name": "Dr. João Silva",
      "role": "doctor"
    }
  }
}
```

### POST /auth/refresh
Renova o access token usando o refresh token.

**Body**:
```json
{
  "refreshToken": "eyJhbG..."
}
```

### GET /auth/profile
Retorna os dados do usuário autenticado.

**Acesso**: Autenticado

---

## Patients Module

### GET /patients
Lista pacientes com paginação e busca.

**Acesso**: `admin`, `doctor`, `receptionist`

**Query Params**:
- `page` (number, default: 1)
- `limit` (number, default: 10)
- `search` (string, busca por nome ou CPF)
- `isActive` (boolean)

**Response** `200`:
```json
{
  "statusCode": 200,
  "data": [...],
  "meta": {
    "total": 150,
    "page": 1,
    "limit": 10,
    "totalPages": 15
  }
}
```

### GET /patients/:id
Retorna um paciente pelo ID.

### POST /patients
Cadastra um novo paciente.

**Acesso**: `admin`, `receptionist`

**Body**:
```json
{
  "firstName": "Maria",
  "lastName": "Santos",
  "cpf": "123.456.789-00",
  "dateOfBirth": "1990-05-15",
  "gender": "female",
  "phone": "(11) 99999-9999",
  "email": "maria@email.com",
  "address": {
    "street": "Rua Example",
    "number": "100",
    "neighborhood": "Centro",
    "city": "São Paulo",
    "state": "SP",
    "zipCode": "01001-000"
  }
}
```

### PATCH /patients/:id
Atualiza dados de um paciente.

### DELETE /patients/:id
Desativa um paciente (soft delete).

---

## Doctors Module

### GET /doctors
Lista médicos com filtro por especialidade.

**Acesso**: `admin`, `receptionist`

**Query Params**:
- `page` (number, default: 1)
- `limit` (number, default: 10)
- `specialty` (string)
- `isActive` (boolean)

### GET /doctors/:id
Retorna um médico pelo ID.

### POST /doctors
Cadastra um novo médico.

**Acesso**: `admin`

**Body**:
```json
{
  "userId": "...",
  "firstName": "João",
  "lastName": "Silva",
  "crm": "CRM/SP 123456",
  "specialties": ["Cardiologia", "Clínica Geral"],
  "email": "joao@medflow.com",
  "phone": "(11) 98888-8888",
  "consultationDuration": 30,
  "workingHours": [
    { "dayOfWeek": 1, "startTime": "08:00", "endTime": "12:00" },
    { "dayOfWeek": 1, "startTime": "14:00", "endTime": "18:00" },
    { "dayOfWeek": 3, "startTime": "08:00", "endTime": "12:00" }
  ]
}
```

### PATCH /doctors/:id
Atualiza dados de um médico.

### DELETE /doctors/:id
Desativa um médico (soft delete).

### GET /doctors/:id/available-slots
Retorna horários disponíveis do médico para uma data.

**Query Params**:
- `date` (string, formato: YYYY-MM-DD, required)

**Response** `200`:
```json
{
  "statusCode": 200,
  "data": {
    "doctorId": "...",
    "date": "2025-01-15",
    "availableSlots": [
      { "startTime": "08:00", "endTime": "08:30" },
      { "startTime": "08:30", "endTime": "09:00" },
      { "startTime": "09:30", "endTime": "10:00" }
    ]
  }
}
```

---

## Appointments Module

### GET /appointments
Lista agendamentos com filtros.

**Acesso**: `admin`, `doctor`, `receptionist`

**Query Params**:
- `page` (number, default: 1)
- `limit` (number, default: 10)
- `doctorId` (string)
- `patientId` (string)
- `status` (string)
- `startDate` (string, YYYY-MM-DD)
- `endDate` (string, YYYY-MM-DD)

### GET /appointments/:id
Retorna um agendamento pelo ID.

### POST /appointments
Cria um novo agendamento.

**Acesso**: `admin`, `doctor`, `receptionist`

**Body**:
```json
{
  "patientId": "...",
  "doctorId": "...",
  "dateTime": "2025-01-15T08:00:00.000Z",
  "type": "first_visit",
  "reason": "Consulta de rotina"
}
```

### PATCH /appointments/:id
Atualiza um agendamento.

### PATCH /appointments/:id/status
Atualiza o status de um agendamento.

**Body**:
```json
{
  "status": "confirmed"
}
```

### PATCH /appointments/:id/cancel
Cancela um agendamento.

**Body**:
```json
{
  "cancelReason": "Paciente solicitou cancelamento"
}
```

---

## Medical Records Module

### GET /medical-records
Lista prontuários com filtros.

**Acesso**: `admin`, `doctor`

**Query Params**:
- `page` (number, default: 1)
- `limit` (number, default: 10)
- `patientId` (string)
- `doctorId` (string)
- `startDate` (string, YYYY-MM-DD)
- `endDate` (string, YYYY-MM-DD)

### GET /medical-records/:id
Retorna um prontuário pelo ID.

### GET /medical-records/patient/:patientId
Retorna todos os prontuários de um paciente.

### POST /medical-records
Cria um novo prontuário.

**Acesso**: `doctor`

**Body**:
```json
{
  "patientId": "...",
  "doctorId": "...",
  "appointmentId": "...",
  "anamnesis": "Paciente relata dor de cabeça há 3 dias...",
  "physicalExamination": "PA: 120/80, FC: 72bpm...",
  "diagnosis": "Cefaleia tensional",
  "icdCodes": [
    { "code": "G44.2", "description": "Cefaleia tipo tensional" }
  ],
  "treatment": "Prescrito analgésico e orientação de repouso",
  "vitalSigns": {
    "bloodPressure": "120/80",
    "heartRate": 72,
    "temperature": 36.5,
    "respiratoryRate": 16,
    "oxygenSaturation": 98,
    "weight": 70,
    "height": 175
  }
}
```

### PATCH /medical-records/:id
Atualiza um prontuário.

**Acesso**: `doctor`

---

## Prescriptions Module

### GET /prescriptions
Lista prescrições com filtros.

**Acesso**: `admin`, `doctor`

**Query Params**:
- `page` (number, default: 1)
- `limit` (number, default: 10)
- `patientId` (string)
- `doctorId` (string)

### GET /prescriptions/:id
Retorna uma prescrição pelo ID.

### GET /prescriptions/patient/:patientId
Retorna todas as prescrições de um paciente.

### POST /prescriptions
Cria uma nova prescrição.

**Acesso**: `doctor`

**Body**:
```json
{
  "medicalRecordId": "...",
  "patientId": "...",
  "doctorId": "...",
  "items": [
    {
      "medication": "Paracetamol",
      "dosage": "500mg",
      "frequency": "6/6h",
      "duration": "5 dias",
      "route": "oral",
      "instructions": "Tomar após as refeições"
    }
  ],
  "notes": "Retorno em 7 dias se não houver melhora"
}
```

### PATCH /prescriptions/:id
Atualiza uma prescrição.

**Acesso**: `doctor`

---

## Códigos de Status HTTP

| Código | Descrição |
|--------|-----------|
| 200 | Sucesso |
| 201 | Recurso criado |
| 400 | Requisição inválida |
| 401 | Não autenticado |
| 403 | Não autorizado (sem permissão) |
| 404 | Recurso não encontrado |
| 409 | Conflito (ex: horário já ocupado, CPF duplicado) |
| 422 | Entidade não processável |
| 500 | Erro interno do servidor |
