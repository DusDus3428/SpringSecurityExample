import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {RestEndpointConstants} from '../config/rest-endpoint-constants';

@Injectable()
export class QuestionAndAnswerService {

  constructor(private http: HttpClient) {
  }

  public getQuestionsAndAnswers(): Observable<any> {
    return this.http.get(environment.backEndUrl.concat(RestEndpointConstants.QUESTION_AND_ANSWER_ENDPOINT), {observe: 'body', responseType: 'json'})
  }
}
