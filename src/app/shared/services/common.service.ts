import {throwError as observableThrowError} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Urls} from '../../components/common/util/constans';

@Injectable()
export class CommonService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
  }

  commonGetRest(url: string) {
    return this._http.get<any>(url).pipe(catchError(this.errorHandler));
  }

  commonPostRest(url: string, data: any) {
    return this._http.post<any>(url, data, {headers: this.httpHeaders()}).pipe(catchError(this.errorHandler));
  }

  // tslint:disable-next-line:variable-name
  commonGetRestWithParams(url: string, params: string, no_paging: boolean) {

    let query: string;
    if (no_paging) {
      query = '?no_paging=true&' + params;
    } else {
      query = '?no_paging=false&' + params;
    }

    return this._http.get<any>(url + query).pipe(catchError(this.errorHandler));
  }

  commonGetSubModelRest(url: string, id: number, subModelName: string) {
    return this._http.get<any>(url + id + '/' + subModelName).pipe(catchError(this.errorHandler));
  }

  commonGetSubModelRestWithParams(url: string, id: number, subModelName: string, params: string) {
    if (!params) {
      params = 'foo=bar';
    }
    return this._http.get<any>(url + id + '/' + subModelName + '?' + params).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error || 'SERVER ERROR');
  }

  httpHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return headers;
  }
}
