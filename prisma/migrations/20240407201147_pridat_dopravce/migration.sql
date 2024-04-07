/*
  Warnings:

  - Added the required column `idDopravce` to the `Obednavka` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Obednavka" ADD COLUMN     "idDopravce" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Dopravce" (
    "idD" SERIAL NOT NULL,
    "nazevDopravce" TEXT NOT NULL,
    "adresa" TEXT NOT NULL,
    "nadmernyNaklad" BOOLEAN NOT NULL,

    CONSTRAINT "Dopravce_pkey" PRIMARY KEY ("idD")
);

-- AddForeignKey
ALTER TABLE "Obednavka" ADD CONSTRAINT "Obednavka_idDopravce_fkey" FOREIGN KEY ("idDopravce") REFERENCES "Dopravce"("idD") ON DELETE RESTRICT ON UPDATE CASCADE;
