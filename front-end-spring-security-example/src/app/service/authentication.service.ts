import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RestEndpointConstants} from '../config/rest-endpoint-constants';
import {AuthenticationCredentials} from "../model/authentication-credentials";
import {User} from "../model/user";

@Injectable()
export class AuthenticationService {
  authenticatedUser: User;

  constructor(private http: HttpClient) {
  }

  public login(credentials: AuthenticationCredentials) {
    const headers = new HttpHeaders((credentials.username && credentials.password) ? {
      authorization: 'Basic' + btoa(credentials.username + ':' + credentials.password)
    }: {});

    this.http.get(environment.backEndUrl.concat(RestEndpointConstants.LOGIN_ENDPOINT), {headers: headers})
      .subscribe(response => {
        if (response['name']) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
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
