import { Type } from "class-transformer";
import { IsNumber, IsPositive, IsUUID } from "class-validator";

export class CreateTransactionRequestDto {
    @IsUUID("4")
    accountExternalIdDebit: string

    @IsUUID("4")
    accountExternalIdCredit: string

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    tranferTypeId: number

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    value: number
}