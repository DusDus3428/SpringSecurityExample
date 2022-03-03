import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {RestEndpointConstants} from '../config/rest-endpoint-constants';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getUsers(): Observable<any> {
    return this.http.get(environment.backEndUrl.concat(RestEndpointConstants.USER_ENDPOINT), {observe: 'body', responseType: 'json'});
  }
}
