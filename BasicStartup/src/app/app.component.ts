import { ServerEventData, Server } from './Shared/server.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BasicStartup';
  server: Server[] = [];
  numbers: number[] = [];
  showPara = true;
  OnAddServer(eventData: ServerEventData) {
    this.server.push(new Server(eventData.serverName, eventData.serverDesc, 'Server'));
  }
  OnAddBluePrint(eventData: ServerEventData) {
    this.server.push(new Server(eventData.serverName, eventData.serverDesc, 'ServerB;uePrint'));
  }

  startGame(number: number) {
    this.numbers.push(number);
  }
  ngOnInit() {
    setInterval(() => {
      this.showPara = !this.showPara;
    }, 3000);
  }
}
