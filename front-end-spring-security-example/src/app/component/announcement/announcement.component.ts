import { Component, OnInit } from '@angular/core';
import {AnnouncementService} from '../../service/announcement.service';
import {Announcement} from '../../model/announcement';
import {UserFeedbackMessageEnum} from '../../helpers/user-feedback-message.enum';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  announcements: Announcement[] = [];
  userFeedbackMessage: string = UserFeedbackMessageEnum.INFO_DATA_BEING_FETCHED_MESSAGE;
  errorOccurred: boolean = false;

  constructor(private announcementService: AnnouncementService) {
    if (this.announcements && this.announcements.length)
      this.userFeedbackMessage = UserFeedbackMessageEnum.INFO_DATA_BEING_FETCHED_MESSAGE;
  }

  ngOnInit(): void {
    this.announcementService.getAnnouncements().subscribe({
      next: (announcements) => {
        this.announcements = announcements.body;
      },
      error: (error) => {
        this.userFeedbackMessage = UserFeedbackMessageEnum.ERROR_NO_DATA_FETCHED_MESSAGE;
        this.errorOccurred = true;
      }
    });
  }
}
