# MedFlow - Esquema do Banco de Dados (MongoDB)

## Visão Geral

Banco de dados NoSQL MongoDB com Mongoose ODM. Cada collection é mapeada por um Mongoose Schema.

---

## Collection: `users`

Usuários do sistema (administradores, médicos, recepcionistas).

```typescript
{
  _id: ObjectId,
  email: string,              // unique, required
  password: string,           // hashed com bcrypt, required
  name: string,               // required
  role: enum ['admin', 'doctor', 'receptionist'],  // required
  isActive: boolean,          // default: true
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**: `email` (unique)

---

## Collection: `patients`

Pacientes do consultório.

```typescript
{
  _id: ObjectId,
  firstName: string,          // required
  lastName: string,           // required
  cpf: string,               // unique, required (formato: 000.000.000-00)
  dateOfBirth: Date,          // required
  gender: enum ['male', 'female', 'other'],  // required
  email: string,
  phone: string,              // required
  secondaryPhone: string,
  address: {
    street: string,
    number: string,
    complement: string,
    neighborhood: string,
    city: string,
    state: string,
    zipCode: string           // formato: 00000-000
  },
  healthInsurance: {
    provider: string,
    planName: string,
    cardNumber: string,
    expirationDate: Date
  },
  emergencyContact: {
    name: string,
    phone: string,
    relationship: string
  },
  bloodType: enum ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  allergies: [string],
  notes: string,
  isActive: boolean,          // default: true
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**: `cpf` (unique), `lastName` (text), `email`

---

## Collection: `doctors`

Médicos do consultório.

```typescript
{
  _id: ObjectId,
  userId: ObjectId,           // ref: users, required
  firstName: string,          // required
  lastName: string,           // required
  crm: string,               // unique, required (ex: CRM/SP 123456)
  specialties: [string],     // required, min: 1
  phone: string,
  email: string,              // required
  consultationDuration: number, // duração padrão em minutos, default: 30
  workingHours: [{
    dayOfWeek: number,        // 0=Dom, 1=Seg, ..., 6=Sáb
    startTime: string,        // formato: "HH:mm"
    endTime: string           // formato: "HH:mm"
  }],
  isActive: boolean,          // default: true
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**: `crm` (unique), `userId` (unique), `specialties`

---

## Collection: `appointments`

Agendamentos de consultas.

```typescript
{
  _id: ObjectId,
  patientId: ObjectId,        // ref: patients, required
  doctorId: ObjectId,         // ref: doctors, required
  dateTime: Date,             // required
  endDateTime: Date,          // required (calculado automaticamente)
  status: enum [
    'scheduled',              // Agendado
    'confirmed',              // Confirmado
    'in_progress',            // Em atendimento
    'completed',              // Concluído
    'cancelled',              // Cancelado
    'no_show'                 // Paciente não compareceu
  ],                          // default: 'scheduled'
  type: enum [
    'first_visit',            // Primeira consulta
    'follow_up',              // Retorno
    'routine'                 // Rotina
  ],                          // required
  reason: string,             // Motivo da consulta
  notes: string,              // Observações
  cancelledAt: Date,
  cancelReason: string,
  createdBy: ObjectId,        // ref: users
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**: `patientId`, `doctorId`, `dateTime`, compound: `{ doctorId, dateTime }` (para verificar conflitos)

---

## Collection: `medical-records`

Prontuários médicos (registros de atendimento).

```typescript
{
  _id: ObjectId,
  patientId: ObjectId,        // ref: patients, required
  doctorId: ObjectId,         // ref: doctors, required
  appointmentId: ObjectId,    // ref: appointments
  date: Date,                 // required
  anamnesis: string,          // Anamnese / Queixa principal
  physicalExamination: string, // Exame físico
  diagnosis: string,          // Diagnóstico
  icdCodes: [{                // CID-10
    code: string,
    description: string
  }],
  treatment: string,          // Conduta / Tratamento
  observations: string,       // Observações adicionais
  vitalSigns: {
    bloodPressure: string,    // ex: "120/80"
    heartRate: number,        // bpm
    temperature: number,      // °C
    respiratoryRate: number,  // irpm
    oxygenSaturation: number, // %
    weight: number,           // kg
    height: number            // cm
  },
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**: `patientId`, `doctorId`, `appointmentId`, `date`

---

## Collection: `prescriptions`

Prescrições médicas.

```typescript
{
  _id: ObjectId,
  medicalRecordId: ObjectId,  // ref: medical-records, required
  patientId: ObjectId,        // ref: patients, required
  doctorId: ObjectId,         // ref: doctors, required
  date: Date,                 // required
  items: [{
    medication: string,       // Nome do medicamento, required
    dosage: string,           // Posologia (ex: "500mg"), required
    frequency: string,        // Frequência (ex: "8/8h"), required
    duration: string,         // Duração (ex: "7 dias"), required
    route: enum [
      'oral',
      'intravenous',
      'intramuscular',
      'subcutaneous',
      'topical',
      'inhalation',
      'other'
    ],                        // default: 'oral'
    instructions: string      // Instruções adicionais
  }],
  notes: string,              // Observações gerais
  isActive: boolean,          // default: true
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes**: `patientId`, `doctorId`, `medicalRecordId`, `date`

---

## Relacionamentos

```
users 1 ──── 1 doctors           (userId)
patients 1 ──── N appointments   (patientId)
doctors 1 ──── N appointments    (doctorId)
patients 1 ──── N medical-records(patientId)
doctors 1 ──── N medical-records (doctorId)
appointments 1 ── 1 medical-records (appointmentId)
medical-records 1 ── N prescriptions (medicalRecordId)
```
