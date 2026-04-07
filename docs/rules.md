# MedFlow - Regras Gerais de Codificação e Estilo

## Linguagem e Framework

- **Backend**: NestJS com TypeScript
- **Banco de Dados**: MongoDB com Mongoose ODM
- **Frontend** (futuro): React com TypeScript

## Convenções de Nomenclatura

### TypeScript / NestJS

- **Classes**: PascalCase (ex: `PatientService`, `AppointmentController`)
- **Interfaces**: PascalCase prefixadas com `I` (ex: `IPatient`, `IAppointment`)
- **Métodos e variáveis**: camelCase (ex: `findPatientById`, `isAppointmentValid`)
- **Constantes**: UPPER_SNAKE_CASE (ex: `MAX_APPOINTMENTS_PER_DAY`, `DEFAULT_PAGE_SIZE`)
- **Enums**: PascalCase para o enum, UPPER_SNAKE_CASE para os valores
- **Arquivos**: kebab-case (ex: `patient.service.ts`, `create-appointment.dto.ts`)

### MongoDB / Mongoose

- **Collections**: plural, kebab-case (ex: `patients`, `medical-records`)
- **Campos**: camelCase (ex: `firstName`, `appointmentDate`)

## Estrutura de Pastas (Backend)

```
/backend
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── config/               # Configurações da aplicação
│   ├── common/               # Decorators, pipes, guards, filters compartilhados
│   │   ├── decorators/
│   │   ├── pipes/
│   │   ├── guards/
│   │   ├── filters/
│   │   └── interceptors/
│   ├── modules/
│   │   ├── auth/             # Autenticação e autorização
│   │   ├── users/            # Gestão de usuários do sistema
│   │   ├── patients/         # Gestão de pacientes
│   │   ├── doctors/          # Gestão de médicos
│   │   ├── appointments/     # Agendamento de consultas
│   │   ├── medical-records/  # Prontuários médicos
│   │   └── prescriptions/    # Prescrições médicas
│   └── shared/               # Utilitários e helpers compartilhados
├── test/
├── .env
├── .env.example
├── nest-cli.json
├── tsconfig.json
└── package.json
```

## Cada Módulo Segue a Estrutura

```
/module-name/
├── dto/                    # Data Transfer Objects
│   ├── create-*.dto.ts
│   └── update-*.dto.ts
├── schemas/                # Mongoose schemas
│   └── *.schema.ts
├── *.controller.ts         # Controller REST
├── *.service.ts            # Lógica de negócio
├── *.module.ts             # Definição do módulo NestJS
└── *.controller.spec.ts    # Testes
```

## Regras de Codificação

1. **Sempre usar tipos explícitos** - Evitar `any` sempre que possível
2. **DTOs para validação** - Usar `class-validator` e `class-transformer` em todos os endpoints
3. **Tratamento de erros** - Usar `HttpException` e filtros de exceção customizados
4. **Documentação de API** - Usar decorators do Swagger/OpenAPI em todos os endpoints
5. **Variáveis de ambiente** - Usar `@nestjs/config` para gerenciar configurações
6. **Injeção de dependência** - Preferir injeção por construtor
7. **Princípio de responsabilidade única** - Um serviço por domínio
8. **Logs estruturados** - Usar o Logger do NestJS

## Padrões de Resposta da API

### Sucesso

```json
{
  "statusCode": 200,
  "message": "Operação realizada com sucesso",
  "data": { ... }
}
```

### Erro

```json
{
  "statusCode": 400,
  "message": "Descrição do erro",
  "error": "Bad Request"
}
```

### Listagem com Paginação

```json
{
  "statusCode": 200,
  "message": "Listagem realizada com sucesso",
  "data": [ ... ],
  "meta": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

## Versionamento

- Commits seguem Conventional Commits (ex: `feat:`, `fix:`, `docs:`)
- Branches seguem o padrão: `feature/`, `fix/`, `docs/`
