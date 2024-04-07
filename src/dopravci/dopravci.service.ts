import { Injectable } from '@nestjs/common';
import { DopravceDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DopravciService {
    constructor(private prisma: PrismaService){}

    async vytvorDopravce(dto: DopravceDto) {
        return await this.prisma.dopravce.create({data:{nazevDopravce: dto.nazev,adresa:dto.adresa}})
    }


    //async nejlepsiDopravce(){
    //        return await this.prisma.dopravce.findMany({orderBy:{obednavy:{include:{_count:{select:{obednavy:true}}}}}})

    //}

}
