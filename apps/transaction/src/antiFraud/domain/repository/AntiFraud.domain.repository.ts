export interface AntiFraudDomainRepository {
    approveTransaction(transactionId: string): Promise<boolean>;
    rejectTransaction(transactionId: string) : Promise<boolean>;
}