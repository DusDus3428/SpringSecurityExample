import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {RestEndpointConstants} from '../config/rest-endpoint-constants';

@Injectable()
export class AnnouncementService {

  constructor(private httpClient: HttpClient) {
  }

  public getAnnouncements(): Observable<any> {
    return this.httpClient.get(environment.backEndUrl.concat(RestEndpointConstants.ANNOUNCEMENT_ENDPOINT), {observe: 'body', responseType: 'json'})
  }
}
