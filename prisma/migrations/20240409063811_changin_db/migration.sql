/*
  Warnings:

  - You are about to drop the `_ObednavkaToZbozi` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idZbozi` to the `Obednavka` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ObednavkaToZbozi" DROP CONSTRAINT "_ObednavkaToZbozi_A_fkey";

-- DropForeignKey
ALTER TABLE "_ObednavkaToZbozi" DROP CONSTRAINT "_ObednavkaToZbozi_B_fkey";

-- AlterTable
ALTER TABLE "Obednavka" ADD COLUMN     "idZbozi" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ObednavkaToZbozi";

-- AddForeignKey
ALTER TABLE "Obednavka" ADD CONSTRAINT "Obednavka_idZbozi_fkey" FOREIGN KEY ("idZbozi") REFERENCES "Zbozi"("idZb") ON DELETE RESTRICT ON UPDATE CASCADE;
