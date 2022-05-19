import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-feedback-message-display',
  templateUrl: './user-feedback-message-display.component.html',
  styleUrls: ['./user-feedback-message-display.component.scss']
})
export class UserFeedbackMessageDisplayComponent implements OnInit {
  @Input()
  isErrorMessage: boolean = false;
  @Input()
  userFeedbackMessage: string;

  constructor() { }

  ngOnInit(): void {
  }
}
