import { Observable } from 'rxjs';
import { Server } from './servers.service';
import { ServersService } from './servers.service';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ServerResolver implements Resolve<Server> {
    constructor (public servService: ServersService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.servService.getServer(+route.params['id']);
    }
}
