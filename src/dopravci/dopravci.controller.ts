import { Body, Controller, Post, Get } from '@nestjs/common';
import { DopravceDto } from './dto';
import { DopravciService } from './dopravci.service';
import { ObednavkyDopravce } from './dto/obednavkyDopravce.dto';

@Controller('dopravci')
export class DopravciController {
    constructor(private dopravciService: DopravciService) { }

    @Post('vytvorDopravce')
    vytvorDopravce(@Body() dto: DopravceDto) {
        return this.dopravciService.vytvorDopravce(dto);
    }

    @Get('Dopravci')
    vsichniDopravci() {
        return this.dopravciService.vsichniDopravci();
    }

    @Get('ObednavkyDopravce')
    obednavyDopravce(@Body() dto: ObednavkyDopravce) {
        return this.dopravciService.obednavkyDopravce(dto);
    }
}
