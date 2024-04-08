import { Body, Controller, Post } from '@nestjs/common';
import { DopravceDto } from './dto';
import { DopravciService } from './dopravci.service';

@Controller('dopravci')
export class DopravciController {
    constructor(private dopravciService: DopravciService) { }

    @Post()
    vytvorDopravce(@Body() dto: DopravceDto) {
        return this.dopravciService.vytvorDopravce(dto);
    }
}
