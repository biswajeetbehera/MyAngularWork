import { Component, OnInit } from '@angular/core';
import { UserAccountService } from './services/user-account.service';
import { Account } from './shared/user-account.modal';

@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.component.html',
  styleUrls: ['./service-component.component.css']
})
export class ServiceComponentComponent implements OnInit {
  accounts: Account[] = this.user.accounts;

  constructor (private user: UserAccountService) { }

  ngOnInit() {
    this.user.statusChanged.subscribe(newStatus => {
      console.log(newStatus);
    });
  }

}
