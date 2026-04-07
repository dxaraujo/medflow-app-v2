# Feature: Autenticação e Autorização

## Descrição
Sistema de autenticação baseado em JWT com controle de acesso por roles (RBAC).

## Roles
- **admin**: Acesso total ao sistema
- **doctor**: Acesso a consultas, prontuários, prescrições e visualização de pacientes
- **receptionist**: Acesso a agendamentos, pacientes e visualização de médicos

## Funcionalidades

### Registro de Usuário
- Somente administradores podem criar novos usuários
- Senha é armazenada com hash bcrypt (salt rounds: 10)
- Email deve ser único no sistema

### Login
- Validação de credenciais (email + senha)
- Geração de access token (expiração: 1h) e refresh token (expiração: 7d)
- Registro de último login

### Refresh Token
- Permite renovar o access token sem novo login
- Refresh token é validado e um novo par de tokens é gerado

### Proteção de Rotas
- Guard JWT valida o token em todas as rotas protegidas
- Guard de Roles verifica se o usuário tem permissão para o recurso
- Token expirado retorna 401

## Regras de Negócio
1. Senha mínima: 8 caracteres, pelo menos 1 letra maiúscula, 1 minúscula e 1 número
2. Após 5 tentativas de login falhas, conta é bloqueada por 15 minutos
3. Tokens JWT contêm: userId, email, role
4. Usuários desativados não podem fazer login
