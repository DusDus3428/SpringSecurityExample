package com.edataconsulting.medium.backendspringsecurityexample.controller;

import com.edataconsulting.medium.backendspringsecurityexample.model.NonSecret;
import com.edataconsulting.medium.backendspringsecurityexample.service.NonSecretAndSecretService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NonSecretAndSecretController {

    @Autowired
    private NonSecretAndSecretService nonSecretAndSecretService;

    @GetMapping("/nonSecret")
    public NonSecret getNonSecret() {
        return nonSecretAndSecretService.getNonSecret();
    }

    @GetMapping("/secret")
    public NonSecret getSecret() {
        return nonSecretAndSecretService.getSecret();
    }

    @GetMapping("/megaSecret")
    public NonSecret getMegaSecret() {
        return nonSecretAndSecretService.getMegaSecret();
    }
}