import { ClientProxy } from "@nestjs/microservices";
import { AntiFraudDomainRepository } from "../../domain/repository/AntiFraud.domain.repository";

export class AntiFraudRepository implements AntiFraudDomainRepository {

    public constructor(private readonly client: ClientProxy) { };

    async approveTransaction(transactionId: string): Promise<boolean> {
        this.client.emit({ cmd: 'approve_transaction' }, {
            transactionId,
        });
        return true;
    }

    async rejectTransaction(transactionId: string): Promise<boolean> {
        this.client.emit({ cmd: 'reject_transaction' }, {
            transactionId,
        });
        return true;
    }
}
