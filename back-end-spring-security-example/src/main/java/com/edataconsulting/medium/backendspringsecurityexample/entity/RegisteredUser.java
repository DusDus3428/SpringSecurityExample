package com.edataconsulting.medium.backendspringsecurityexample.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name="t_registered_user")
public class RegisteredUser {
    @Id
    private long id;
    private String username;
    private String password;
    private String permission;

    protected RegisteredUser() {}
}
