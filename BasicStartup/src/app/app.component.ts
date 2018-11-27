import { ServerEventData, Server } from './Shared/server.modal';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicStartup';
  server: Server[] = [];

  OnAddServer(eventData: ServerEventData) {
    this.server.push(new Server(eventData.serverName, eventData.serverDesc, 'Server'));
  }
  OnAddBluePrint(eventData: ServerEventData) {
    this.server.push(new Server(eventData.serverName, eventData.serverDesc, 'ServerB;uePrint'));
  }
}
