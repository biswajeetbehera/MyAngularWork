import { UsersService } from './../services/users.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  constructor (public user: UsersService) { }

  onSetToActive(id: number) {
    this.user.SetToActive(id);
  }
}
