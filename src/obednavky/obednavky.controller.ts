import { Body, Controller, Post, Get } from '@nestjs/common';
import { vytvorObednavku } from './dto';
import { ObednavkyService } from './obednavky.service';

@Controller('obednavky')
export class ObednavkyController {
    constructor(private obednavyService: ObednavkyService) { }

    @Post('vytvorObednavku')
    vytvorObednaku(@Body() dto: vytvorObednavku) {
        return this.obednavyService.pridatObednavku(dto);
    }

    @Get('Obednavky')
    vsechnyObednavky() {
        return this.obednavyService.vsechnyObednavky();
    }

    @Get('minuliRok')
    obednavyMinuliRok(){
        return this.obednavyService.obednavkyMinuliRok();            

    }
}
