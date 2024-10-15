import { Type } from "class-transformer";
import { IsNumber, IsPositive, IsString } from "class-validator";
import { TransactionRequestDomain } from "../../domain/entities/TransactionRequestDomain";

export class CreateTransactionRequestDto implements TransactionRequestDomain {
    @IsString()
    accountExternalIdDebit: string;

    @IsString()
    accountExternalIdCredit: string;

    @IsNumber()
    @Type(() => Number)
    tranferTypeId: number;

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    value: number
}
