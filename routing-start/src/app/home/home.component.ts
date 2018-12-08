import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (public router: Router, public authService: AuthService) { }

  ngOnInit() {
  }
  onLoadServer(id: string) {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: 1 }, fragment: 'loading' });
  }

  logIn() {
    this.authService.LogIn();
  }

  logOut() {
    this.authService.LogOut();
  }
}
