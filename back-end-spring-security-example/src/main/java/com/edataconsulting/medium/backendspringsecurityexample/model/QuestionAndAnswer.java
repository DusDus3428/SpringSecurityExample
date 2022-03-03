package com.edataconsulting.medium.backendspringsecurityexample.model;

import lombok.Getter;

import java.util.Date;

@Getter
public class QuestionAndAnswer {
    private String questionText;
    private Date questionDate;
    private String questionUser;
    private String answerText;
    private Date answerDate;
    private String answerUser;

    public QuestionAndAnswer(String questionText, Date questionDate, String questionUser, String answerText, Date answerDate, String answerUser){
        this.questionText = questionText;
        this.questionDate = questionDate;
        this.questionUser = questionUser;
        this.answerText = answerText;
        this.answerDate = answerDate;
        this.answerUser = answerUser;
    }
}
