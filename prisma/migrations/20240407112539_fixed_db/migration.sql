/*
  Warnings:

  - You are about to drop the column `idZbozi` on the `Obednavka` table. All the data in the column will be lost.
  - You are about to drop the column `idObjednavky` on the `Zakaznik` table. All the data in the column will be lost.
  - Added the required column `zakaznikId` to the `Obednavka` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Obednavka" DROP CONSTRAINT "Obednavka_idZbozi_fkey";

-- DropForeignKey
ALTER TABLE "Zakaznik" DROP CONSTRAINT "Zakaznik_idObjednavky_fkey";

-- AlterTable
ALTER TABLE "Obednavka" DROP COLUMN "idZbozi",
ADD COLUMN     "zakaznikId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Zakaznik" DROP COLUMN "idObjednavky";

-- CreateTable
CREATE TABLE "_ObednavkaToZbozi" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ObednavkaToZbozi_AB_unique" ON "_ObednavkaToZbozi"("A", "B");

-- CreateIndex
CREATE INDEX "_ObednavkaToZbozi_B_index" ON "_ObednavkaToZbozi"("B");

-- AddForeignKey
ALTER TABLE "Obednavka" ADD CONSTRAINT "Obednavka_zakaznikId_fkey" FOREIGN KEY ("zakaznikId") REFERENCES "Zakaznik"("idZ") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ObednavkaToZbozi" ADD CONSTRAINT "_ObednavkaToZbozi_A_fkey" FOREIGN KEY ("A") REFERENCES "Obednavka"("idO") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ObednavkaToZbozi" ADD CONSTRAINT "_ObednavkaToZbozi_B_fkey" FOREIGN KEY ("B") REFERENCES "Zbozi"("idZ") ON DELETE CASCADE ON UPDATE CASCADE;
