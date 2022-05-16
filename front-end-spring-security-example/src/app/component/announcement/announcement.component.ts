import { Component, OnInit } from '@angular/core';
import {AnnouncementService} from '../../service/announcement.service';
import {Announcement} from '../../model/announcement';
import {MissingDataMessageReasonEnum} from '../../helpers/missing-data-message-reason.enum';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  announcements: Announcement[] = [];
  missingDataMessageReason: string;

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.announcementService.getAnnouncements().subscribe({
      next: (announcements) => {
        this.announcements = announcements.body;
      },
      error: (error) => {
        this.missingDataMessageReason = MissingDataMessageReasonEnum.NO_DATA_FETCHED;
      }
    });
  }
}
