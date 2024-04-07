import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class zboziDto {
    @IsNotEmpty()
    @IsString()
    nazev: string;
    @IsNotEmpty()
    @IsNumber()
    cena: number;
    @IsNotEmpty()
    @IsBoolean()
    skladem: boolean;
}
