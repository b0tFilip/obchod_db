import { Body, Controller, Post } from '@nestjs/common';
import { DopravceDto } from './dto';

@Controller('dopravci')
export class DopravciController {
    
    @Post()
    vytvorDopravce(@Body() dto:DopravceDto ){
        ret

    }



}
