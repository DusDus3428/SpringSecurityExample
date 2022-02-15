package com.edataconsulting.medium.backendspringsecurityexample.service;

import com.edataconsulting.medium.backendspringsecurityexample.model.MegaSecret;
import com.edataconsulting.medium.backendspringsecurityexample.model.NonSecret;
import com.edataconsulting.medium.backendspringsecurityexample.model.Secret;
import org.springframework.stereotype.Service;

@Service
public class NonSecretAndSecretService {
    public NonSecret getNonSecret() {
        return new NonSecret("This is a regular text. Nothing secretive about it.");
    }

    public Secret getSecret() {
        return new Secret("This is a regular text. Nothing secretive about it.",
                "This is a secret text. It's secret.");
    }

    public MegaSecret getMegaSecret(){
        return new MegaSecret("This is a regular text. Nothing secretive about it.",
                "This is a secret text. It's secret.",
                "This is a mega secret text. It's very secret.");
    }
}
