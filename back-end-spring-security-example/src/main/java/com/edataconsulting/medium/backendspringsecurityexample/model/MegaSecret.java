package com.edataconsulting.medium.backendspringsecurityexample.model;

import lombok.Getter;

@Getter
public class MegaSecret extends Secret{
    private String megaSecret;

    public MegaSecret(String nonSecret, String secret, String megaSecret) {
        super(nonSecret, secret);
        this.megaSecret = megaSecret;
    }
}
