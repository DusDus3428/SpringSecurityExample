package com.edataconsulting.medium.backendspringsecurityexample.service;

import com.edataconsulting.medium.backendspringsecurityexample.entity.RegisteredUser;
import com.edataconsulting.medium.backendspringsecurityexample.repository.RegisteredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("userDetailsService")
public class RegisteredUserService implements UserDetailsService {
    @Autowired
    private RegisteredUserRepository registeredUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        RegisteredUser registeredUser = this.registeredUserRepository.findByUsername(username);

        if (registeredUser == null) {
            throw new UsernameNotFoundException("The user " + username + " is not a registered user.");
        }

        return registeredUser;
    }
}
