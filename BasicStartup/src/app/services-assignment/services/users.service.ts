import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor (public counter: CounterService) { }

    SetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counter.increment();
    }

    SetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counter.increment();
    }
}
