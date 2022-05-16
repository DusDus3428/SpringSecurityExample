import { Component, OnInit } from '@angular/core';
import {QuestionAndAnswer} from '../../model/question-and-answer';
import {QuestionAndAnswerService} from '../../service/question-and-answer.service';
import {MissingDataMessageReasonEnum} from '../../helpers/missing-data-message-reason.enum';

@Component({
  selector: 'app-question-and-answer',
  templateUrl: './question-and-answer.component.html',
  styleUrls: ['./question-and-answer.component.scss']
})
export class QuestionAndAnswerComponent implements OnInit {

  questionsAndAnswers: QuestionAndAnswer[] = [];
  missingDataMessageReason: string;

  constructor(private questionAndAnswerService: QuestionAndAnswerService) { }

  ngOnInit(): void {
    this.questionAndAnswerService.getQuestionsAndAnswers().subscribe({
      next: (questionsAndAnswers) => {
        this.questionsAndAnswers = questionsAndAnswers.body;
      },
      error: (error) => {
        switch (error.status) {
          case 401:
            this.missingDataMessageReason = MissingDataMessageReasonEnum.USER_UNAUTHENTICATED;
            break;
          default:
            this.missingDataMessageReason = MissingDataMessageReasonEnum.NO_DATA_FETCHED;
            break;
        }
      }
    });
  }
}
