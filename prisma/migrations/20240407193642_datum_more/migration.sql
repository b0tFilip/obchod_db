/*
  Warnings:

  - Added the required column `updateAt` to the `Obednavka` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Obednavka" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL;
