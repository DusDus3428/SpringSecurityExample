import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {UserFeedbackMessageEnum} from '../../helpers/user-feedback-message.enum';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  userFeedbackMessage: string = UserFeedbackMessageEnum.INFO_DATA_BEING_FETCHED_MESSAGE;
  errorOccurred: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users.body;
      },
      error: (error) => {
        switch (error.status) {
          case 401:
            this.userFeedbackMessage = UserFeedbackMessageEnum.ERROR_USER_UNAUTHENTICATED_MESSAGE;
            break;
          case 403:
            this.userFeedbackMessage = UserFeedbackMessageEnum.ERROR_USER_UNAUTHORIZED_MESSAGE;
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
