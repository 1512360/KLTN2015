import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptionsArgs, Response, QueryEncoder } from '@angular/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { Observable, throwError } from 'rxjs';
import { map, catchError, timeout, share } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


@Injectable()
export class BackendService {
  private params: Object = new Object();
  private defaultTimeOut: number = 60000;

  constructor(private http: Http,
    private router: Router,
    private cookieService: CookieService) {

    for (var key in environment.settings) {
      if (!environment.settings.hasOwnProperty(key)) continue;
      this.params[key] = environment.settings[key];
    }

  }

  get(url: string,
    parameters?: Object,
    headers?: Headers,
    cache: boolean = true) {

    let query = '';
    if (parameters) {
      for (var key in parameters) {
        if (!parameters.hasOwnProperty(key)) continue;
        query += '&' + key + '=' + parameters[key];
      }
    }

    let observable = this.http.get(this.getApiUrl(url, cache), {
      headers: this.getHeaders(headers),
      search: new URLSearchParams(query),
      body: ""
    }).pipe(timeout(this.defaultTimeOut));
    return this.wrap(observable);
  }

  post(url: string,
    body: Object,
    parameters?: URLSearchParams,
    headers?: Headers,
    cache: boolean = true) {

    let observable = this.http.post(this.getApiUrl(url, cache), JSON.stringify(body), {
      headers: this.getHeaders(headers),
      search: parameters
    }).pipe(timeout(this.defaultTimeOut));
    return this.wrap(observable);
  }

  put(url: string,
    body: Object,
    parameters?: URLSearchParams,
    headers?: Headers,
    cache: boolean = true) {

    let observable = this.http.put(this.getApiUrl(url, cache), JSON.stringify(body), {
      headers: this.getHeaders(headers),
      search: parameters
    }).pipe(timeout(this.defaultTimeOut));
    return this.wrap(observable);
  }

  delete(url: string,
    body: Object,
    parameters?: URLSearchParams,
    headers?: Headers,
    options?: RequestOptionsArgs,
    cache: boolean = true) {

    let observable = this.http.delete(this.getApiUrl(url, cache), {
      headers: this.getHeaders(headers),
      search: parameters,
      body: JSON.stringify(body)
    }).pipe(timeout(this.defaultTimeOut));
    return this.wrap(observable);
  }

  wrap(observable: Observable<Response>) {
    return observable.pipe(catchError(error => {
      if (error.status === 401) {
        this.router.navigate(['/login']);
        return Observable.throw(error);
      } else if (error.status === 400) {
        return Observable.throw(error);
      } else {
        return Observable.throw(error);
      }
    }), share());
  }

  getApiUrl(url: string, cache: boolean = true) {
    if (!(/^https?:\/\/.*/gi.test(url))) {
      if (url.indexOf('/') != 0) {
        url = '/' + url;
      }
      url = this.getParameter('apiUrl') + url;
    }
    if (cache) {
      if (url.indexOf("?") > 0) {
        url = url + "&_=" + Date.now();
      } else {
        url = url + "?_=" + Date.now();
      }
    }
    return url;
  }

  private getHeaders(headers: Headers = new Headers()) {
    if (!headers.get('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }

    let session = this.cookieService.get('session');
    if (!session) {
      this.router.navigate(['/login']);
    }
    headers.set('SESSION', session);
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    return headers;
  }

  getParameter(name) {
    return this.params[name];
  }

  getParameters() {
    return this.params;
  }

  getS3Bucket(): string {
    return this.getParameter('s3Bucket');
  }

  getS3BaseFolder(): string {
    return this.getParameter('s3BaseFolder');
  }

  guid(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}
