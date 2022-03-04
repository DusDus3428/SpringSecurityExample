import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RestEndpointConstants} from '../config/rest-endpoint-constants';

@Injectable()
export class AuthenticationService {
  readonly USER_NAME: string = "sessionUser";

  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string) {
    const headers = new HttpHeaders((username && password) ? {
      authorization: 'Basic' + btoa(username + ':' + password)
    }: {});

    this.http.get(environment.backEndUrl.concat(RestEndpointConstants.LOGIN_ENDPOINT), {headers: headers})
      .subscribe(response => {
        sessionStorage.setItem(this.USER_NAME, response.username);
      });
  }

  public logout(){
    sessionStorage.removeItem(this.USER_NAME);
  }

  public isUserAuthenticated() {
    const sessionUser = sessionStorage.getItem(this.USER_NAME);
    if (sessionUser) return true;
    return false;
  }
}
