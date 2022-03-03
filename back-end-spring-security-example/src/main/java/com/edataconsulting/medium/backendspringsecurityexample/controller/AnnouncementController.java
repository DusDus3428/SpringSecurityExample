package com.edataconsulting.medium.backendspringsecurityexample.controller;

import com.edataconsulting.medium.backendspringsecurityexample.model.Announcement;
import com.edataconsulting.medium.backendspringsecurityexample.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/announcement")
public class AnnouncementController {
    @Autowired
    private AnnouncementService announcementService;

    @GetMapping("/")
    public List<Announcement> getAnnouncements() {
        return announcementService.getAnnouncements();
    }
}