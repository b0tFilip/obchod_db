import { IsNotEmpty } from 'class-validator';

export class vytvorObednavku {
    @IsNotEmpty()
    zakaznikID: number;
    @IsNotEmpty()
    zboziID: string;
    @IsNotEmpty()
    dopravceID: string;
}
