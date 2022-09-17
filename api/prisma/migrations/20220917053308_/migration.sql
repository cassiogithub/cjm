-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "senha" VARCHAR(100) NOT NULL,
    "url_imagem" VARCHAR(500),

    CONSTRAINT "pk_usuario" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "uk_usuario_email" ON "Usuario"("email");
