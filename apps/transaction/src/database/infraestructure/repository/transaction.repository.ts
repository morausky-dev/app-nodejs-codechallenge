import { TransactionRepositoryDomain } from "../../domain/repository/transaction.repository";
import { TransactionRequestDomain } from "../../domain/entities/TransactionRequestDomain";
import { PrismaService } from "../prisma/prisma.service";
import { StatusDomain } from "../../domain/entities/StatusDomain";
import { TransactionReponseDomain } from "../../domain/entities/TransactionReponseDomain";

export class TransactionRepository implements TransactionRepositoryDomain {

    public constructor(private readonly prismaService: PrismaService) {}
    
    async getTransaction(transactionId: string): Promise<TransactionReponseDomain> {
        const transactionResult = await this.prismaService.transaction.findFirst({
            where: {
                transactionId
            },
            select: {
                accountExternalIdCredit: true,
                accountExternalIdDebit: true,
                createdAt: true,
                tranferTypeId: true,
                transactionId: true,
                transactionStatus: {
                    select: {
                        status: true,
                        id: true
                    }
                },
                value: true,
            }
        });
        const status = transactionResult.transactionStatus.reduce(
                (valPrev, valCurrent) => (valPrev.id > valCurrent.id) ? valPrev : valCurrent, { id: -1, status: null }
            ).status;
        return {
            createdAt: transactionResult.createdAt,
            transactionExternalId: transactionResult.transactionId,
            transactionStatus: {
                name: status
            },
            transactionType: {
                name: '',
            },
            value: transactionResult.value
        }
    }
;

    async saveTransaction(transaction: TransactionRequestDomain): Promise<{transactionId: string}> {
   
        const transactionResult = await this.prismaService.transaction.create({
            data: {
                ...transaction,
                transactionStatus: {
                    create: {
                        status: "Pending"
                    },
                },
            },
        });

        return {
            transactionId: transactionResult.transactionId
        };
    }

    async updateTransactionState(status: StatusDomain, transactionId: string): Promise<boolean> {
        await this.prismaService.transactionState.create({
            data: {
                status,
                transactionId,
            },
        });

        return true;
    }

}