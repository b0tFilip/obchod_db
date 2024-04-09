import { Body, Controller, Post, Get} from '@nestjs/common';
import { ZakaznikDto } from './dto';
import { ZakaznikService } from './zakaznik.service';

@Controller('zakaznik')
export class ZakaznikController {
    constructor(private zakaznikService: ZakaznikService) { }

    @Post('vytvorZakaznika')
    novyZakznik(@Body() dto: ZakaznikDto) {
        return this.zakaznikService.novyZakaznik(dto);
    }


    @Get('vsichniZakaznici')
    zakaznici(){
        return this.zakaznikService.zakaznici();
    }
}
