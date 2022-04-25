package com.edataconsulting.medium.backendspringsecurityexample.model;

import lombok.Getter;
import java.util.Date;

@Getter
public class Announcement {
    private String headline;
    private String text;
    private Date date;

    public Announcement(String headline, String text, Date date){
        this.headline = headline;
        this.text = text;
        this.date = date;
    }
}
