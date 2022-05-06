import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpStatusCode} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {RestEndpointConstants} from '../config/rest-endpoint-constants';
import {AuthenticationCredentials} from "../model/authentication-credentials";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {
  private authenticatedUser: BehaviorSubject<AuthenticationCredentials>;
  public authenticatedUserAsObservable: Observable<AuthenticationCredentials>;

  constructor(private http: HttpClient,
              private router: Router) {
    this.authenticatedUser = new BehaviorSubject<AuthenticationCredentials>(JSON.parse(localStorage.getItem('user')));
    this.authenticatedUserAsObservable = this.authenticatedUser.asObservable();
  }

  public getAuthenticatedUser() {
    return this.authenticatedUser.value;
  }

  public login(credentials: AuthenticationCredentials) {
    return this.http.post<AuthenticationCredentials>(environment.backEndUrl.concat(RestEndpointConstants.LOGIN_ENDPOINT), {username: credentials.username, password: credentials.password})
      .pipe(map(response => {
        console.log(response)

        if (response.username) {
          console.log('There')
          localStorage.setItem('user', JSON.stringify(credentials));
          this.authenticatedUser.next(credentials);
        }
      }));
  }

  public logout() {
    localStorage.removeItem('user');
    this.authenticatedUser.next(null);
    this.router.navigateByUrl('/login')
  }
}
