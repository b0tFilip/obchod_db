/*
  Warnings:

  - The primary key for the `Zakaznik` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idZ` on the `Zakaznik` table. All the data in the column will be lost.
  - The primary key for the `Zbozi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idZ` on the `Zbozi` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Obednavka" DROP CONSTRAINT "Obednavka_zakaznikId_fkey";

-- DropForeignKey
ALTER TABLE "_ObednavkaToZbozi" DROP CONSTRAINT "_ObednavkaToZbozi_B_fkey";

-- AlterTable
ALTER TABLE "Zakaznik" DROP CONSTRAINT "Zakaznik_pkey",
DROP COLUMN "idZ",
ADD COLUMN     "idZa" SERIAL NOT NULL,
ADD CONSTRAINT "Zakaznik_pkey" PRIMARY KEY ("idZa");

-- AlterTable
ALTER TABLE "Zbozi" DROP CONSTRAINT "Zbozi_pkey",
DROP COLUMN "idZ",
ADD COLUMN     "idZb" SERIAL NOT NULL,
ADD CONSTRAINT "Zbozi_pkey" PRIMARY KEY ("idZb");

-- AddForeignKey
ALTER TABLE "Obednavka" ADD CONSTRAINT "Obednavka_zakaznikId_fkey" FOREIGN KEY ("zakaznikId") REFERENCES "Zakaznik"("idZa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ObednavkaToZbozi" ADD CONSTRAINT "_ObednavkaToZbozi_B_fkey" FOREIGN KEY ("B") REFERENCES "Zbozi"("idZb") ON DELETE CASCADE ON UPDATE CASCADE;
