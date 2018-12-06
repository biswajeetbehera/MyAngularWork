import { AccountType } from './../shared/user-account.modal';
import { UserAccountService } from './../services/user-account.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor (public user: UserAccountService) { }

  onSetTo(status: AccountType) {
    this.user.StatusChanged(this.id, status);
    this.user.statusChanged.emit(status);
  }
}
