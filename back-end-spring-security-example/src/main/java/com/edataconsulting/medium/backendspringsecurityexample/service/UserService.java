package com.edataconsulting.medium.backendspringsecurityexample.service;

import com.edataconsulting.medium.backendspringsecurityexample.model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    public List<User> getUsers(){
        return new ArrayList<User>() {{
           add(new User("ilovespace78", "ilovespace78@spacespace.com", "Member"));
           add(new User("ilovethemoon88", "ilovethemoon88@moonmoon.com", "Member"));
           add(new User("ilovemars98", "ilovemars98@marsmars.com", "Member"));
        }};
    }
}
