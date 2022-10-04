# CJM BBQ

## Introdução
    O presente projeto visa apresentar uma ferramenta para criação e organização de pequenos eventos, 
    tendo como base o publico comum que através da nossa pesquisa apresenta dificuldade em organizar algum evento particular.

### Hipótese:
    Supomos que hoje encontramos dificuldades para organizar um evento,
    com isso temos em mente a criação do aplicativo CJM.

## Metodologia
O desenvolvimento da aplicação se da a construção de um aplicativo web e mobile, 
onde usuários cadastrados podem criar eventos e distribuir links de maneira rápida e conclusiva.
Foi utilizado o modelo de arquitetura utilizado dentro do projeto Crescer da CWI Software.
Os serviços de hospedagem se distribuem em: 

1. Backend: Heroku
2. Frontend: Vercel
3. Banco de dados: ElephantSQL
4. Repositório: Github

A plataforma conta com autenticação e criptografia de senhas no padrão SHA-256 utilizando a biblioteca BCript 
assim garantindo a privacidade de senhas cadastradas.

Após avaliação das ferramentas a serem utilizadas em desenvolvimento, foi definido por Cássio Rodrigues responsável pela aplicação que:

Para o frontend foi utilizado a biblioteca ReactJS na versão 18.2.0 para fins de estudo e avaliação da ferramenta.

Para o backend foi utilizado NodeJS na versão 16.16 para maior agilidade no desenvolvimento da aplicação,
e por proximidade com a linguagem,
também foi utilizado do ORM Prisma para controle e gerenciamento de banco de dados com motivo de maior desempenho e facilidade de uso.

Para base de dados optamos por utilizar PostgreSQL na versão 14.4.

## Funcionalidades

- Usuários Cadastrados podem:
  - Criar novos eventos assim recebendo link encurtado para compartilhamento;
  - Gerenciar usuários que confirmaram presença no seu evento, podendo excluir da lista de confirmados;
  - Editar e atualizar eventos, podendo alterar nome, local e data do evento.
  - Ativar e Desativar eventos com apenas 1 clique.
  - Buscar eventos apartir da hash de identificação disponibilizada ao criar um novo envento ou visualizar evento existente.

- Usuários convidados por link:
  - Este usuário precisa de um link cadastrado na plataforma, para realizar a sua presença no evento precisa apenas registrar o seu nome,
   e telefone para contato. 
  - Podem criar sua conta de usuário apartir do menu de navegação localizado no topo da pagina.

## Dependencias do projeto

- NodeJS 16.16.0
- ReactJS 18.2.0
- PostgreSQL 14.5

## Informações para contato:
- Cássio Rodrigues
  - ti.contatocassio@gmail.com

- Maico Barragan 
  - maico.mendes@yahoo.com

- Julian Ribeiro
  - julianribeiro2@hotmail.com


## Figma

 - https://www.figma.com/file/bU0VtVUUqCmImffxxumkNH/CJM-BBQ?node-id=0%3A1
