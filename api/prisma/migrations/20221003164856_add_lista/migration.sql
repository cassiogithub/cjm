-- CreateTable
CREATE TABLE "EventoConfirmados" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "contato" VARCHAR(11) NOT NULL,
    "eventoId" INTEGER NOT NULL,

    CONSTRAINT "pk_EventoConfirmados" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EventoConfirmados" ADD CONSTRAINT "EventoConfirmados_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
