package com.edataconsulting.medium.backendspringsecurityexample.model;

import lombok.Getter;

@Getter
public class Secret extends NonSecret{
    private String secret;

    public Secret(String nonSecret, String secret){
        super(nonSecret);
        this.secret = secret;
    }
}
