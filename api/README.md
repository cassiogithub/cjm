# API - CJM

## Introdução

A documentação a seguir introduz as rotas de requisições da aplicação
esquema de banco de dados, instalação e dependencias do backend.

## Dependencias

- NodeJS 16.16 - https://nodejs.org/en/
- NPM compativel com versão do node instalada
- PostgreSQL 14.5 https://www.postgresql.org/
- Git - https://git-scm.com/

## Instalação

Após realizado o clone do seguinte repositório https://github.com/cassiogithub/cjm deverá navegar até o diretório /api e executar o comando

- npm install
  - Este comando instalará as dependencias do projeto.

Após a instalação deverá ser possível visualizar a pasta node_modules dentro do diretório /api.

Deverá após a instalação das dependencias configurar as variaveis de ambiente conforme seu banco de dados, e configurações personalizadas de segredos.

Tendo isso concluido, deve ser executado o seguinte comando

- npm start
  - Este comando iniciará o servidor nodemon localmente.


### Caso necessite criar o schema do banco localmente, faça os seguintes processos:

- npx prisma migrate dev --name <Aqui você irá definir o nome da migration>

1. Este comando cria um novo arquivo de migração SQL para esta migração
2. Ele executa o arquivo de migração SQL no banco de dados

## Rotas

### Usuário:

#### Criar novo usuário
```javascript
    POST: /usuarios

    body: {
    "nome":"cassio rodrigues",
    "email":"moacir@teste.com",
    "dataNascimento":"1996-03-03",
    "senha":"123",
    "urlImagem":"https://avatars.githubusercontent.com/u/17843839?v=4"
    }
```


#### Login
```javascript
    POST: /login

    body: {
    "email":"moacir@teste.com",
    "senha": "123"
    }
```

### Eventos:

#### Criar Evento
```javascript
    POST: /evento/:usuarioId

    body: {
        "nome": "Churrasco na minha casa",
        "local": "Avenida Julio Renner 0000",
        "dataEvento": "2022-10-03 22:00:00"
    }
```

#### Buscar Evento
```javascript
    GET: /evento

    body: {
        "hashEvento": "36c96043cb9277431d1c"
    }
```

#### Listar eventos (paginação)
```javascript
    GET: /evento/:userId/:page/:size
```

#### Alterar disponibilidade evento

```javascript
    PUT: /evento/:userId/alterAtivo

     body: {
        "eventoId": 1
    }
```

### Presença em eventos:

#### Listar usuários por evento
```javascript
    GET: /evento/:eventoId/listarConfirmados
```

#### Confirmar presença em evento
```javascript
    POST: /evento/:eventoId/confirmar

    body: {
        "nome": "Pedro Motta",
        "contato": "5136321151"
    }
```
#### Confirmar presença em evento
```javascript
    DELETE: /evento/:userId/:eventoId

    body:{
        "userRemoved": 1
    }
```





