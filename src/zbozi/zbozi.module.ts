import { Module } from '@nestjs/common';
import { ZboziService } from './zbozi.service';
import { ZboziController } from './zbozi.controller';

@Module({
  controllers: [ZboziController],
  providers: [ZboziService],
})
export class ZboziModule {}
