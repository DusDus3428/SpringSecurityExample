package com.edataconsulting.medium.backendspringsecurityexample.model;

import lombok.Getter;
import java.util.Date;

@Getter
public class Post {
    private String text;
    private Date date;
    private String user;

    public Post(String text, Date date, String user){
        this.text = text;
        this.date = date;
        this.user = user;
    }
}
