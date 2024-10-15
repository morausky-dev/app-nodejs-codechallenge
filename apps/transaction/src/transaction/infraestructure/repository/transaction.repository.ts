import { ClientProxy } from "@nestjs/microservices";
import { Status } from "@prisma/client";
import { TransactionRepositoryDomain } from "../../domain/repository/transaction.domain.repository";
import { TransactionReponseDomain } from "../../domain/entity/TransactionReponseDomain";
import { TransactionRequestDomain } from "../../domain/entity/TransactionRequestDomain";
import { firstValueFrom } from "rxjs";

export class TransactionRepository implements TransactionRepositoryDomain {

    public constructor(private readonly client: ClientProxy) { }

    async saveTransaction(transaction: TransactionRequestDomain): Promise<{ transactionId: string; }> {
        const result = this.client.send({ cmd: 'save_transaction' }, {
            transaction,
        });
        return firstValueFrom(result);
    }

    async sendTransactionCreated(transactionId: string, value: number): Promise<void> {
        this.client.emit({ cmd: 'transaction_created' }, {
            transactionId,
            value,
        });
    }

    async getTransaction(transactionId: string): Promise<TransactionReponseDomain> {
        const result = this.client.send({ cmd: 'get_transaction' }, {
            transactionId,
        });
        return firstValueFrom(result);
    };

    async approveTransaction(transactionId: string): Promise<boolean> {
        this.client.emit({ cmd: 'update_transaction_status' }, {
            transactionId,
            status: Status.Approved,
        });
        return true;
    }

    async rejectTransaction(transactionId: string): Promise<boolean> {
        this.client.emit({ cmd: 'update_transaction_status' }, {
            transactionId,
            status: Status.Rejected,
        });
        return true;
    }

}