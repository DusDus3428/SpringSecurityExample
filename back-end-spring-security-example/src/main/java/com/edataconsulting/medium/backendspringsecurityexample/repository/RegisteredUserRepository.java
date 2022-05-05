package com.edataconsulting.medium.backendspringsecurityexample.repository;

import com.edataconsulting.medium.backendspringsecurityexample.entity.RegisteredUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, Long> {
    RegisteredUser findByUsername(String username);
}
