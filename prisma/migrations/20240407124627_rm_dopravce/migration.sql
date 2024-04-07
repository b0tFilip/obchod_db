/*
  Warnings:

  - You are about to drop the column `idDopravce` on the `Obednavka` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Zakaznik` table. All the data in the column will be lost.
  - You are about to drop the column `tel` on the `Zakaznik` table. All the data in the column will be lost.
  - You are about to drop the `Dopravce` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Obednavka" DROP CONSTRAINT "Obednavka_idDopravce_fkey";

-- DropIndex
DROP INDEX "Zakaznik_email_key";

-- AlterTable
ALTER TABLE "Obednavka" DROP COLUMN "idDopravce";

-- AlterTable
ALTER TABLE "Zakaznik" DROP COLUMN "email",
DROP COLUMN "tel";

-- DropTable
DROP TABLE "Dopravce";
