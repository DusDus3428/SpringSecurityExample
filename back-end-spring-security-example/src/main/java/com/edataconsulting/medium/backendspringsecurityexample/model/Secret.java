package com.edataconsulting.medium.backendspringsecurityexample.model;

import lombok.Getter;

@Getter
public class Secret {
    private String secretText;

    public Secret(String secretText){
        this.secretText = secretText;
    }
}
