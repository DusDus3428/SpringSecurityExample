package com.edataconsulting.medium.backendspringsecurityexample.model;

import lombok.Getter;

@Getter
public class MegaSecret{
    private String megaSecretText;

    public MegaSecret(String megaSecretText) {
        this.megaSecretText = megaSecretText;
    }
}
