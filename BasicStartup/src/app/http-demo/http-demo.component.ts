import { ServersService } from './../servers.service';
import { Component, OnInit } from '@angular/core';
import { ServerHttp } from '../Shared/server-http.modal';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {
  servers: ServerHttp[] = [
    new ServerHttp('Testserver', 10),
    new ServerHttp('Liveserver', 100),
  ];

  appName = this.serversService.appName();

  constructor (private serversService: ServersService) { }

  ngOnInit() {
  }

  onAddServer(name: string) {
    this.servers.push(new ServerHttp(name, 50));
  }

  onPostServers() {
    this.serversService.storeServers(this.servers).subscribe((servers: ServerHttp[]) => {
      console.log(servers);
    });
  }

  onGetServers() {
    this.serversService.getServers().subscribe((servers: ServerHttp[]) => {
      this.servers = servers;
    });
  }

}
