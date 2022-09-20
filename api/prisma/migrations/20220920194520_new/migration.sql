-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "local" VARCHAR(255) NOT NULL,
    "data_evento" TIMESTAMP NOT NULL,
    "link_convite" VARCHAR(100) NOT NULL,
    "usuarioId" INTEGER NOT NULL,

    CONSTRAINT "pk_evento" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
