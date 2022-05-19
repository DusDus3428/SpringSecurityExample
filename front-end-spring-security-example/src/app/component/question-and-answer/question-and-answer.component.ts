import { Component, OnInit } from '@angular/core';
import {QuestionAndAnswer} from '../../model/question-and-answer';
import {QuestionAndAnswerService} from '../../service/question-and-answer.service';
import {UserFeedbackMessageEnum} from '../../helpers/user-feedback-message.enum';

@Component({
  selector: 'app-question-and-answer',
  templateUrl: './question-and-answer.component.html',
  styleUrls: ['./question-and-answer.component.scss']
})
export class QuestionAndAnswerComponent implements OnInit {

  questionsAndAnswers: QuestionAndAnswer[] = [];
  userFeedbackMessage: string = UserFeedbackMessageEnum.INFO_DATA_BEING_FETCHED_MESSAGE;
  errorOccurred: boolean = false;

  constructor(private questionAndAnswerService: QuestionAndAnswerService) { }

  ngOnInit(): void {
    this.questionAndAnswerService.getQuestionsAndAnswers().subscribe({
      next: (questionsAndAnswers) => {
        this.questionsAndAnswers = questionsAndAnswers.body;
      },
      error: (error) => {
        switch (error.status) {
          case 401:
            this.userFeedbackMessage = UserFeedbackMessageEnum.ERROR_USER_UNAUTHENTICATED_MESSAGE;
            break;
          default:
            this.userFeedbackMessage = UserFeedbackMessageEnum.ERROR_NO_DATA_FETCHED_MESSAGE;
            break;
        }
        this.errorOccurred = true;
      }
    });
  }
}
