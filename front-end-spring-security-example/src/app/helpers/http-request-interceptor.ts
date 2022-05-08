import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthenticationService} from "../service/authentication.service";
import {Injectable} from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.authenticationService.getAuthenticatedUser();
    if (user) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Basic ' + btoa(user.username + ':' + user.password)
        }
      })
    }
    return next.handle(request);
  }
}
