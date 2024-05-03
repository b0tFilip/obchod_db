import { Injectable } from '@nestjs/common';
import { PrismaClient, Zakaznik, Zbozi } from '@prisma/client';
import { vytvorObednavku } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ObednavkyService {
    constructor(private prisma: PrismaService) { }

    async pridatObednavku(dto: vytvorObednavku) {
        const pObevnky = this.prisma.obednavka;
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
