import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import {MissingDataMessageReasonEnum} from '../../helpers/missing-data-message-reason.enum';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  missingDataMessageReason: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users.body;
      },
      error: (error) => {
        switch (error.status) {
          case 401:
            this.missingDataMessageReason = MissingDataMessageReasonEnum.USER_UNAUTHENTICATED;
            break;
          case 403:
            this.missingDataMessageReason = MissingDataMessageReasonEnum.USER_UNAUTHORIZED;
            break;
          default:
            this.missingDataMessageReason = MissingDataMessageReasonEnum.NO_DATA_FETCHED;
            break;
        }
      }
    });
  }
}
