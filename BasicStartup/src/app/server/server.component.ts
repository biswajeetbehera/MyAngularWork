import { Server } from './../Shared/server.modal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') srvElement: Server;
  constructor () { }

  ngOnInit() {
  }

}
