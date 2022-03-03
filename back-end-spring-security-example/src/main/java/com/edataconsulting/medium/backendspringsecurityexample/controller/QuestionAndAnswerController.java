package com.edataconsulting.medium.backendspringsecurityexample.controller;

import com.edataconsulting.medium.backendspringsecurityexample.model.QuestionAndAnswer;
import com.edataconsulting.medium.backendspringsecurityexample.service.QuestionAndAnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/questionAndAnswer")
public class QuestionAndAnswerController {
    @Autowired
    private QuestionAndAnswerService questionsAndAnswersService;

    @GetMapping("/")
    public List<QuestionAndAnswer> getQuestionsAndAnswers() {
        return this.questionsAndAnswersService.getQuestionsAndAnswers();
    }
}