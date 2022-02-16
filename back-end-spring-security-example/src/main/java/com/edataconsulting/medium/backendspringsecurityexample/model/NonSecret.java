package com.edataconsulting.medium.backendspringsecurityexample.model;

import lombok.Getter;

@Getter
public class NonSecret {
    private String nonSecretText;

    public NonSecret(String nonSecretText){
        this.nonSecretText = nonSecretText;
    }
}
