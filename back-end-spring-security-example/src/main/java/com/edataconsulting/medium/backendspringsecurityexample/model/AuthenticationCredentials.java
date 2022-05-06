package com.edataconsulting.medium.backendspringsecurityexample.model;

import lombok.Getter;

@Getter
public class AuthenticationCredentials {
    private String username;
    private String password;

    public AuthenticationCredentials(){
    }

    public AuthenticationCredentials(String username, String password){
        this.username = username;
        this.password = password;
    }
}
