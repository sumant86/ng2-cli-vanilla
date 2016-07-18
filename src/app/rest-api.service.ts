import { Injectable } from '@angular/core';
import { AppConfig } from './app.config';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RestApiService {

  constructor(private _http:Http) {}
  getUsers() {
    return this._http.get(AppConfig.LOCAL_API + 'users')
      .map((res:Response) => res.json())
      .catch(this.handleError);
  }
  handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }

}
