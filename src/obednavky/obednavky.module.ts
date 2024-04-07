import { Module } from '@nestjs/common';
import { ObednavkyService } from './obednavky.service';
import { ObednavkyController } from './obednavky.controller';

@Module({
    providers: [ObednavkyService],
    controllers: [ObednavkyController],
})
export class ObednavkyModule { }
