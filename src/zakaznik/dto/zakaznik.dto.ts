import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ZakaznikDto {
    @IsString()
    @IsNotEmpty()
    jmeno: string;

    @IsNotEmpty()
    @IsString()
    prijmeni: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;



}
