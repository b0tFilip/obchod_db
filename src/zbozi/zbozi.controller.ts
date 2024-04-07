import { Controller, Post, Get} from '@nestjs/common';
import { ZboziService } from './zbozi.service';
import { zboziDto } from './dto';
import { Body } from '@nestjs/common';

@Controller('zbozi')
export class ZboziController {
    constructor(private zboziService: ZboziService) { }
    @Post('vytvorZbozi')
    vytvorZbozi(@Body() dto: zboziDto) {
        return this.zboziService.vytvorZbozi(dto);
    }
    @Get('seznamZbozi')
    seznamZbozi(){
        return this.zboziService.seznamZbozi();

    }
}
