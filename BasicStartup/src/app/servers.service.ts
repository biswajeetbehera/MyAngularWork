import { Response } from '@angular/http';
import { HttpClient, HttpResponse, HttpHeaders, HttpEventType, HttpRequest, HttpEvent } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { ServerHttp } from './Shared/server-http.modal';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor (private http: HttpClient) { }
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
    return this.http.put<ServerHttp[]>('https://basic-setup-c6032.firebaseio.com/servers.json', servers);
    // .pipe(map((response: ServerHttp[]) => response.json()));
    // no need to map to json with HttpClient module it directly observes json data.
  }

  public getServers(): Observable<any> {
    // you can optimize error by catching it here or in subscribe funtion
    return this.http.get('https://basic-setup-c6032.firebaseio.com/servers.json', {
      observe: 'response',
      responseType: 'text'
    })
      .pipe(
        map((response: HttpResponse<string>) => JSON.parse(response.body)),
        catchError((response: Response) => Observable.throw('Something went wrong')),
      );
  }

  public appName() {
    return this.http.get('https://basic-setup-c6032.firebaseio.com/AppName.json', {
      observe: 'events',
      responseType: 'text',
      headers: new HttpHeaders().set('content-type', 'application/json'),
    })
      .pipe(map((response: HttpResponse<string>) => {
        if (response.type === 4) {
          return response.body;
        }
        this.requestProgress();
      }
      ));

  }
  public requestProgress() {
    const req = new HttpRequest('GET', 'https://basic-setup-c6032.firebaseio.com/AppName.json', {
      reportProgress: true,
    });

    this.http.request(req).subscribe((response: HttpEvent<string>) => console.log(response)
    );
  }
}
