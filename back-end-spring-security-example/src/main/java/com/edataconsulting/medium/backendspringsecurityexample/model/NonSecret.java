package com.edataconsulting.medium.backendspringsecurityexample.model;

import lombok.Getter;

@Getter
public class NonSecret {
    private String nonSecret;

    public NonSecret(String nonSecret){
        this.nonSecret = nonSecret;
    }
}
