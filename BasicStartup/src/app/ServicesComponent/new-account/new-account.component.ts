import { UserAccountService } from './../services/user-account.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AccountType } from '../shared/user-account.modal';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @ViewChild('accountName') accountName: ElementRef;
  @ViewChild('status') status: ElementRef;

  constructor (private user: UserAccountService) { }

  onCreateAccount() {
    const accNameVal: HTMLInputElement = this.accountName.nativeElement;
    const newStatus: HTMLSelectElement = this.status.nativeElement;
    this.user.AccountAdded(accNameVal.value, <AccountType>newStatus.value);
  }
}
