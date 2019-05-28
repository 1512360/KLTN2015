import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptionsArgs, Request, Response, QueryEncoder } from '@angular/http';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';



@Injectable()
export class UploadService {

  constructor(private http: Http, private httpClient: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', environment.settings.uploadUrl, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.httpClient.request(req);
  }
}
