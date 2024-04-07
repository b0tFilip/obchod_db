import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ZakaznikDto } from './dto';

@Injectable()
export class ZakaznikService {
    constructor(private prisma: PrismaService) { }

    async novyZakaznik(dto: ZakaznikDto) {
        const novyZakaznik = await this.prisma.zakaznik.create({
            data: { jmeno: dto.jmeno, primeni: dto.prijmeni },
        });

        return novyZakaznik;
    }

    async zakaznici() {
        return await this.prisma.zakaznik.findMany();
    }
}
