import { LoggerService } from './logger.service';
import { Account, AccountType } from './../shared/user-account.modal';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserAccountService {
    accounts: Account[] = [
        new Account('Master Account', 'active'),
        new Account('TestAccount', 'inactive'),
        new Account('Hidden Account', 'unknown'),
    ];

    statusChanged = new EventEmitter<AccountType>();

    AccountAdded(name: string, status: AccountType) {
        this.accounts.push(new Account(name, status));
        this.logger.log(status);
    }

    StatusChanged(id: number, newStatus: AccountType) {
        this.accounts[id].status = newStatus;
        this.logger.log(newStatus);
    }

    constructor (private logger: LoggerService) { }
}
