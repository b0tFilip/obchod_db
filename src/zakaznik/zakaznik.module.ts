import { Module } from '@nestjs/common';
import { ZakaznikService } from './zakaznik.service';
import { ZakaznikController } from './zakaznik.controller';

@Module({
  providers: [ZakaznikService],
  controllers: [ZakaznikController]
})
export class ZakaznikModule {}
