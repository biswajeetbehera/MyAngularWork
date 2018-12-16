
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ServerHttp } from './Shared/server-http.modal';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor (private http: Http) { }
  public storeServers(servers: ServerHttp[]): Observable<any> {
    /* we can use http header in below commented line but right now it is throwing error due to deprecation
    ** instead we can use httpClientModule to resolve but for now we will use it without header.
    */
    // const headers_http = new Headers({'content-type': 'application/json'});
    // headers_http.append('content-type', 'application/json');
    // this.http.post('https://basic-setup-c6032.firebaseio.com/servers.json', servers, { headers: headers_http });

    /* we can use post method to post any data to server mentioned but use put instead to
    ** update the orignal data with sent data not to merge new data
    ** server is name of property to create on api and .json is need for firebase api.
    */
    // this.http.post('https://basic-setup-c6032.firebaseio.com/servers.json', servers);
    return this.http.put('https://basic-setup-c6032.firebaseio.com/servers.json', servers)
      .pipe(map((response: Response) => response.json()));
  }

  public getServers(): Observable<any> {
    // you can optimize error by catching it here or in subscribe funtion
    return this.http.get('https://basic-setup-c6032.firebaseio.com/servers.json')
      .pipe(
        map((response: Response) => response.json()),
        catchError((response: Response) => Observable.throw('Something went wrong')),
      );
  }

  public appName() {
    return this.http.get('https://basic-setup-c6032.firebaseio.com/AppName.json')
      .pipe(map((response: Response) => response.json()));
  }
}
