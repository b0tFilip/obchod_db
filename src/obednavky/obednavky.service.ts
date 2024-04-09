import { Injectable } from '@nestjs/common';
import { PrismaClient, Zakaznik, Zbozi } from '@prisma/client';
import { vytvorObednavku } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ObednavkyService {
    constructor(private prisma: PrismaService) { }

    async pridatObednavku(dto: vytvorObednavku) {
        const pObevnky = this.prisma.obednavka;

        // Rozděluje string na array
        //const dtoZboziID = dto.zboziID.split(',');

        // Vyhledává v DB vŠehcny entries podle dtoZboziID a dává je do jednoho listu seznamZbozi
        //let seznamZbozi: Zbozi[] = [];
//
 //       for (let index = 0; index < dtoZboziID.length; index++) {
  //          seznamZbozi.push(
   //             //
    //            // Hledá entries v DB podle IdZb které bylo předáno v DTO
     //           await this.prisma.zbozi.findUnique({
      //              where: { idZb: Number(dtoZboziID[index]) },
       //         }),
        //    );
        //}
        // Odstraňuje všechny ID protože rozbíjí create
        //seznamZbozi.map((x) => delete x.idZb);

        // vytváří novou obědnávku
        return await pObevnky.create({
            data: {
                idZbozi: Number(dto.zboziID),
                zakaznikId: Number(dto.zakaznikID),
                idDopravce: Number(dto.dopravceID),
            },
        });
    }
    async vsechnyObednavky() {
        return await this.prisma.obednavka.findMany({
            include: { zakaznik: true, dopravce: true },
        });
    }

    async obednavkyMinuliRok() {
        return await this.prisma.obednavka.findMany({
            where: { createdAt: { lt: new Date('2024-01-01') } },
        });
    }
}
