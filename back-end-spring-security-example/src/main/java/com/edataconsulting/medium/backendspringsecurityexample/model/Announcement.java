package com.edataconsulting.medium.backendspringsecurityexample.model;

import lombok.Getter;
import java.util.Date;

@Getter
public class Announcement {
    private String announcementHeadline;
    private String announcementText;
    private Date announcementDate;

    public Announcement(String announcementHeadline, String announcementText, Date announcementDate){
        this.announcementHeadline = announcementHeadline;
        this.announcementText = announcementText;
        this.announcementDate = announcementDate;
    }
}