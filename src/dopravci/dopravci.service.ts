import { Injectable } from '@nestjs/common';
import { DopravceDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ObednavkyDopravce } from './dto/obednavkyDopravce.dto';

@Injectable()
export class DopravciService {
    constructor(private prisma: PrismaService) { }

    async vytvorDopravce(dto: DopravceDto) {
        return await this.prisma.dopravce.create({
            data: { nazevDopravce: dto.nazev, adresa: dto.adresa },
        });
    }

    async vsichniDopravci() {
        return await this.prisma.dopravce.findMany();
    }

    async obednavkyDopravce(dto: ObednavkyDopravce) {
        return await this.prisma.obednavka.findMany({
            where: { idDopravce: Number(dto.dopravceID) }, include: { zakaznik: true, zbozi:true},
        });
}
}
