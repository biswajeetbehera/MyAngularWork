import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { NgModule } from '@angular/core';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ActiveUsersComponent,
        InactiveUsersComponent
    ],
    providers: [
        CounterService,
        UsersService,
    ],
    exports: [
        ActiveUsersComponent,
        InactiveUsersComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ServicesAssignmentModule { }
