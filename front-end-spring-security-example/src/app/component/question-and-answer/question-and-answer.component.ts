import { Component, OnInit } from '@angular/core';
import {QuestionAndAnswer} from '../../model/question-and-answer';
import {QuestionAndAnswerService} from '../../service/question-and-answer.service';

@Component({
  selector: 'app-question-and-answer',
  templateUrl: './question-and-answer.component.html',
  styleUrls: ['./question-and-answer.component.scss']
})
export class QuestionAndAnswerComponent implements OnInit {

  questionsAndAnswers: QuestionAndAnswer[] = [];

  constructor(private questionAndAnswerService: QuestionAndAnswerService) { }

  ngOnInit(): void {
    this.questionAndAnswerService.getQuestionsAndAnswers().subscribe(questionsAndAnswers => this.questionsAndAnswers = questionsAndAnswers)
  }
}
