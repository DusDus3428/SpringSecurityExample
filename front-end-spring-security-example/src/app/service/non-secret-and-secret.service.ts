import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {RestEndpointConstants} from '../config/rest-endpoint-constants';

@Injectable()
export class NonSecretAndSecretService {

  constructor(private httpClient: HttpClient) {
  }

  public getNonSecret(): Observable<any> {
    return this.httpClient.get(environment.backEndUrl.concat(RestEndpointConstants.NON_SECRET_ENDPOINT), {observe: 'body', responseType: 'json'})
  }

  public getSecret(): Observable<any> {
    return this.httpClient.get(environment.backEndUrl.concat(RestEndpointConstants.SECRET_ENDPOINT), {observe: 'body', responseType: 'json'})
  }

  public getMegaSecret(): Observable<any> {
    return this.httpClient.get(environment.backEndUrl.concat(RestEndpointConstants.MEGA_SECRET_ENDPOINT), {observe: 'body', responseType: 'json'})
  }
}
