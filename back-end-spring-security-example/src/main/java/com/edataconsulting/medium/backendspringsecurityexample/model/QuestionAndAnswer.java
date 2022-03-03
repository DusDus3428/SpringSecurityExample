package com.edataconsulting.medium.backendspringsecurityexample.model;

import lombok.Getter;

@Getter
public class QuestionAndAnswer {
    private Post question;
    private Post answer;

    public QuestionAndAnswer(Post question, Post answer){
        this.question = question;
        this.answer = answer;
    }
}