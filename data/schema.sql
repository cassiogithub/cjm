DROP TABLE IF EXISTS usuario CASCADE;
CREATE TABLE usuario (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  data_nascimento DATE NOT NULL,
  senha VARCHAR(100) NOT NULL,
  url_imagem varchar(500)
);
ALTER TABLE usuario
ADD CONSTRAINT pk_usuario PRIMARY KEY (id);
ALTER TABLE usuario
ADD CONSTRAINT uk_usuario_email UNIQUE (email);