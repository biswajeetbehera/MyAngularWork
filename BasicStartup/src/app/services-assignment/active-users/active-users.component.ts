import { UsersService } from './../services/users.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  constructor (public user: UsersService) { }
  onSetToInactive(id: number) {
    this.user.SetToInactive(id);
  }
}
