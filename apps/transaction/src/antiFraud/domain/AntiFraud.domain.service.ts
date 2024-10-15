import { GREATER_VALUE_TO_REJECT } from "./constants/constants";
import { AntiFraudDomainRepository } from "./repository/AntiFraud.domain.repository";

export class AntiFraudDomainService {

    constructor(private readonly antiFraudRepository: AntiFraudDomainRepository) { }

    async validateTransactionCreated(transactionId: string, value: number) {
        if (value > GREATER_VALUE_TO_REJECT) {
            this.antiFraudRepository.rejectTransaction(transactionId);
        } else {
            this.antiFraudRepository.approveTransaction(transactionId);
        }
    }
}