import { IsEnum, IsString, IsUUID } from "class-validator";
import { StatusDomain } from "../../domain/entities/StatusDomain";

export class UpdateTransactionStatusRequestDto {
    @IsString()
    @IsEnum(StatusDomain)
    status: StatusDomain;

    @IsUUID('4')
    transactionId: string;
}
