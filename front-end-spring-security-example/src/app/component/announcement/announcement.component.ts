import { Component, OnInit } from '@angular/core';
import {AnnouncementService} from '../../service/announcement.service';
import {Announcement} from '../../model/announcement';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  announcements: Announcement[] = [];

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.announcementService.getAnnouncements().subscribe(announcements => this.announcements = announcements)
  }

}
