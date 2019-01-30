import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, map, retry } from 'rxjs/operators';

@Injectable()
export class HttpService {

  private headers: HttpHeaders;

  constructor(private httpClient: HttpClient) {

    this.headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Accept', 'application/json');
  }

  post(url: string, data: string): Observable<any> {

    return this.httpClient.post(url, data, { 'headers': this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  postError(url: string, data: string): Observable<any> {

    return this.httpClient.post(url, data, { 'headers': this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  postObject(url: string, object: any): Observable<any> {
    return this.post(url, JSON.stringify(object));
  }

  get(url: string, options?: any): Observable<any> {

    return this.httpClient
      .get(url, options)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getNewVersion(url: string): Observable<any> {

    return this.httpClient
      .get(url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


  /**
   * Get raw response without mapping it to JSON
   *
   * @param url
   * @param options
   * @returns {Observable<R>}
   */
  getRaw(url: string, options?: object): Observable<any> {

    return this.httpClient.get(url, options)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  delete(url: string, options?: object): Observable<any> {

    return this.httpClient.delete(url, options)
      .pipe(
        map((res: Response) => {

          if (res && res.status === 204) {
            // empty response, return null
            return null;
          } else {
            return res;
          }
        }),
        catchError(this.handleError)
      );
  }

  put(url: string, data: string): Observable<any> {

    return this.httpClient.put(url, data, { headers: this.headers })
      .pipe(
        map((res: Response) => res),
        catchError(this.handleError)
      );
  }

  putObject(url: string, object: any): Observable<any> {
    return this.put(url, JSON.stringify(object));
  }

  private handleError(error: any) {

    console.log(error);

    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console

    return throwError(error || 'Server error');
  }
}
