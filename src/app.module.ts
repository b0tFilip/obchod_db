import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObednavkyModule } from './obednavky/obednavky.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ZboziModule } from './zbozi/zbozi.module';
import { ZakaznikModule } from './zakaznik/zakaznik.module';
import { DopravciController } from './dopravci/dopravci.controller';
import { DopravciModule } from './dopravci/dopravci.module';
import { DopravciService } from './dopravci/dopravci.service';
import { DopravciController } from './dopravci/dopravci.controller';
@Module({
    imports: [ObednavkyModule, PrismaModule, ConfigModule.forRoot({isGlobal:true}), ZboziModule, ZakaznikModule, DopravciModule],
    controllers: [AppController, DopravciController,],
    providers: [AppService, DopravciService,],
})
export class AppModule { }
