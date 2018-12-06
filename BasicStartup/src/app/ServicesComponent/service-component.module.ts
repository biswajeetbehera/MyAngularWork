import { UserAccountService } from './services/user-account.service';
import { LoggerService } from './services/logger.service';
import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { NewAccountComponent } from './new-account/new-account.component';

@NgModule({
    declarations: [
        AccountComponent,
        NewAccountComponent,
    ],
    providers: [
        LoggerService,
        UserAccountService
    ],
    exports: [
        AccountComponent,
        NewAccountComponent
    ]
})
export class ServiceModule { }
