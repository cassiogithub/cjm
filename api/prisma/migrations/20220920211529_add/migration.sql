/*
  Warnings:

  - Added the required column `hash_evento` to the `Evento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Evento" ADD COLUMN     "hash_evento" VARCHAR(100) NOT NULL;
