import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers: { id: number, name: string, status: string }[] = [];

  constructor (private serversService: ServersService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  // this will fetch error but it is used to showcase demo for relativeTo option for router.
  reloadServers() {
    this.router.navigate(['servers'], { relativeTo: this.route });
  }
}
