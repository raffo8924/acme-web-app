import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Urls} from '../../common/util/constans';
import {throwError as observableThrowError, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable()
export class PersonService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
  }

  getModels(queryString: string) {
    return this._http.get<any>(Urls.PERSON_SERVICE_API + queryString).pipe(catchError(this.errorHandler));
  }

  getModel(id: number) {
    return this._http.get<any>(Urls.PERSON_SERVICE_API + id).pipe(catchError(this.errorHandler));
  }

  createModel(model: any) {
    return this._http.post<any>(Urls.PERSON_SERVICE_API, JSON.stringify(model), {headers: this.httpHeaders()}).pipe(catchError(this.errorHandler));
  }

  updateModel(id: number, model: any) {
    return this._http.put<any>(Urls.PERSON_SERVICE_API + id, JSON.stringify(model), {headers: this.httpHeaders()}).pipe(catchError(this.errorHandler));
  }

  deleteModel(id: number) {
    return this._http.delete<any>(Urls.PERSON_SERVICE_API + id).pipe(catchError(this.errorHandler));
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
