import { CanDeactivateGuardComponent } from './../can-deactivate-guard.service';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGuardComponent {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor (
    private serversService: ServersService,
    private activeRooute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.activeRooute.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });

    this.activeRooute.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });

    this.activeRooute.fragment.subscribe((fragment: string) => { });

    console.log(this.activeRooute.snapshot.queryParams);
    console.log(this.activeRooute.snapshot.fragment);
    console.log(this.activeRooute.snapshot.params);



  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../', { relativeTo: this.activeRooute }]);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    } else if ((this.serverName !== this.server.name
      || this.serverStatus !== this.server.status)
      && !this.changesSaved) {
      return confirm('do you want to save your changes?');
    } else if (this.changesSaved) {
      return true;
    } else {
      return true;
    }
  }
}
