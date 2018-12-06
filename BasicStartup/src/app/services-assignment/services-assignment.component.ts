import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-services-assignment',
  templateUrl: './services-assignment.component.html',
  styleUrls: ['./services-assignment.component.css']
})
export class ServicesAssignmentComponent implements OnInit {
  activeUsers: string[];
  inactiveUsers: string[];

  constructor (public users: UsersService) { }

  ngOnInit() {
    this.activeUsers = this.users.activeUsers;
    this.inactiveUsers = this.users.inactiveUsers;
  }

}
