import { ServerEventData } from './../Shared/server.modal';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @ViewChild('serverName') serverName: ElementRef;
  @ViewChild('serverDesc') serveDesc: ElementRef;
  /* tslint:disable:no-output-rename */
  @Output('addServer') addServer = new EventEmitter<ServerEventData>();
  @Output('bpAdded') addBluePrint = new EventEmitter<ServerEventData>();

  constructor () { }

  ngOnInit() {
  }

  OnAddServer() {
    this.addServer.emit(new ServerEventData(this.serverName.nativeElement.value,
      this.serveDesc.nativeElement.value
    ));
  }

  OnAddBluePrint() {
    this.addBluePrint.emit(new ServerEventData(this.serverName.nativeElement.value,
      this.serveDesc.nativeElement.value
    ));
  }
}
