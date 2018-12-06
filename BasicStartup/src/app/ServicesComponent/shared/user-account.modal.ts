export class Account {
    constructor (public name: string, public status: AccountType) { }
}
export type AccountType = 'active' | 'inactive' | 'unknown';
