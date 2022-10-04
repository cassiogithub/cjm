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





