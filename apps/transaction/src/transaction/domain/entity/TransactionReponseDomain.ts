export interface TransactionReponseDomain {
    transactionExternalId: string
    transactionType: {
        name: string
    }
    transactionStatus: {
        name: string
    }
    value: number   
    createdAt: Date
}