package com.edataconsulting.medium.backendspringsecurityexample.service;

import com.edataconsulting.medium.backendspringsecurityexample.model.Post;
import com.edataconsulting.medium.backendspringsecurityexample.model.QuestionAndAnswer;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionAndAnswerService {
    public List<QuestionAndAnswer> getQuestionsAndAnswers(){
        Instant now = Instant.now();

        QuestionAndAnswer questionAndAnswer1 = new QuestionAndAnswer(
                new Post("Why are you going to fly to space?",
                        Date.from(now.minus(15, ChronoUnit.DAYS)),
                        "ilovespace78"),
                new Post("Because we love weightlessness.",
                        java.util.Date.from(now.minus(14, ChronoUnit.DAYS)),
                        "Bob"));

        QuestionAndAnswer questionAndAnswer2 = new QuestionAndAnswer(
                new Post("Why are you going to fly to the moon?",
                        Date.from(now.minus(5, ChronoUnit.DAYS)),
                        "ilovethemoon88"),
                new Post("Because we love rocks.",
                        java.util.Date.from(now.minus(4, ChronoUnit.DAYS)),
                        "Sheila"));

        QuestionAndAnswer questionAndAnswer3 = new QuestionAndAnswer(
                new Post("Why are you going to fly to Mars?",
                        Date.from(now.minus(1, ChronoUnit.DAYS)),
                        "ilovemars98"),
                new Post("Because we can.",
                        java.util.Date.from(now),
                        "Hope"));

        return new ArrayList<>() {{
            add(questionAndAnswer1);
            add(questionAndAnswer2);
            add(questionAndAnswer3);
        }};
    }
}
