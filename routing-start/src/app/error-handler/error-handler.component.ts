import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent implements OnInit {
  message: string;
  constructor (public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => this.message = data['message']);
  }

}
