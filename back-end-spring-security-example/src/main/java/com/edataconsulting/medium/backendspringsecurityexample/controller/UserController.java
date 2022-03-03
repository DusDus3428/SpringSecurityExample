package com.edataconsulting.medium.backendspringsecurityexample.controller;

import com.edataconsulting.medium.backendspringsecurityexample.model.User;
import com.edataconsulting.medium.backendspringsecurityexample.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public List<User> getUsers() {
        return this.userService.getUsers();
    }
}