import { Type } from "class-transformer";
import { IsNumber, IsPositive, IsUUID } from "class-validator";

export class TransactionRequestDto {
    @IsUUID()
    transactionId: string;

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    value: number
}
