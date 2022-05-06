package com.edataconsulting.medium.backendspringsecurityexample.controller;

import com.edataconsulting.medium.backendspringsecurityexample.entity.RegisteredUser;
import com.edataconsulting.medium.backendspringsecurityexample.model.AuthenticationCredentials;
import com.edataconsulting.medium.backendspringsecurityexample.service.RegisteredUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class AuthenticationController {
    @Autowired
    RegisteredUserService registeredUserService;

    @PostMapping("/")
    public AuthenticationCredentials login(@RequestBody AuthenticationCredentials authenticationCredentials) {
        RegisteredUser registeredUser = (RegisteredUser) this.registeredUserService.loadUserByUsername(authenticationCredentials.getUsername());

        if (registeredUser == null) {
            registeredUser = null;
        }

        return new AuthenticationCredentials(registeredUser.getUsername(), registeredUser.getPassword());
    }
}
