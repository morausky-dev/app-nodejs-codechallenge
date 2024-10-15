import { ClientProxy } from "@nestjs/microservices";
import { TransactionReponseDomain } from "../../domain/entity/TransactionReponseDomain";
import { TransactionRequestDomain } from "../../domain/entity/TransactionRequestDomain";
import { TransactionRepositoryDomain } from "../../domain/repository/transaction.repository.domain";
import { firstValueFrom } from "rxjs";

export class TransactionRepository implements TransactionRepositoryDomain {

    public constructor(private readonly client: ClientProxy) { };
    async postTransaction(transaction: TransactionRequestDomain): Promise<{ transactionId: string; }> {
        const result = this.client.send<{ transactionId: string; }>({ cmd: 'store_transaction' }, {
            transaction,
        });
        return firstValueFrom(result);
    }
    async getTransaction(transactionId: string): Promise<TransactionReponseDomain> {
        const result = this.client.send<TransactionReponseDomain>({ cmd: 'get_transaction' }, {
            transactionId,
        });
        return firstValueFrom(result);
    }
}