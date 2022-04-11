package com.edataconsulting.medium.backendspringsecurityexample.model;

import lombok.Getter;
import java.util.Date;

@Getter
public class Post {
    private String postText;
    private Date postDate;
    private String postUser;

    public Post(String postText, Date postDate, String postUser){
        this.postText = postText;
        this.postDate = postDate;
        this.postUser = postUser;
    }
}