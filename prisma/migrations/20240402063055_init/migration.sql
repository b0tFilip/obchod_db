-- CreateTable
CREATE TABLE "Zakaznik" (
    "idZ" SERIAL NOT NULL,
    "jmeno" TEXT NOT NULL,
    "primeni" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tel" INTEGER NOT NULL,
    "idObjednavky" INTEGER NOT NULL,

    CONSTRAINT "Zakaznik_pkey" PRIMARY KEY ("idZ")
);

-- CreateTable
CREATE TABLE "Obednavka" (
    "idO" SERIAL NOT NULL,
    "idZbozi" INTEGER NOT NULL,

    CONSTRAINT "Obednavka_pkey" PRIMARY KEY ("idO")
);

-- CreateTable
CREATE TABLE "Zbozi" (
    "idZ" SERIAL NOT NULL,
    "nazev" TEXT NOT NULL,
    "cena" DOUBLE PRECISION NOT NULL,
    "skladem" BOOLEAN NOT NULL,

    CONSTRAINT "Zbozi_pkey" PRIMARY KEY ("idZ")
);

-- CreateTable
CREATE TABLE "Dopravce" (
    "idD" SERIAL NOT NULL,
    "nazevDopravce" TEXT NOT NULL,
    "adresa" TEXT NOT NULL,
    "nadmernyNaklad" BOOLEAN NOT NULL,

    CONSTRAINT "Dopravce_pkey" PRIMARY KEY ("idD")
);

-- CreateIndex
CREATE UNIQUE INDEX "Zakaznik_email_key" ON "Zakaznik"("email");

-- AddForeignKey
ALTER TABLE "Zakaznik" ADD CONSTRAINT "Zakaznik_idObjednavky_fkey" FOREIGN KEY ("idObjednavky") REFERENCES "Obednavka"("idO") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Obednavka" ADD CONSTRAINT "Obednavka_idZbozi_fkey" FOREIGN KEY ("idZbozi") REFERENCES "Zbozi"("idZ") ON DELETE RESTRICT ON UPDATE CASCADE;
