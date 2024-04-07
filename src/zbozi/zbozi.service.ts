import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { zboziDto } from './dto';

@Injectable()
export class ZboziService {
    constructor(private prisma: PrismaService) { }

    async vytvorZbozi(dto: zboziDto) {
        const noveZbozi = await this.prisma.zbozi.create({
            data: {
                nazev: dto.nazev,
                cena: Number(dto.cena),
                skladem: Boolean(dto.skladem),
            },
        });
        return noveZbozi;
    }


    async seznamZbozi(){
        return await this.prisma.zbozi.findMany({})
    }
}
