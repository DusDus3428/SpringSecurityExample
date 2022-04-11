package com.edataconsulting.medium.backendspringsecurityexample.service;

import com.edataconsulting.medium.backendspringsecurityexample.model.Announcement;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class AnnouncementService {
    public List<Announcement> getAnnouncements() {
        Instant now = Instant.now();
        return new ArrayList<>() {{
            add(new Announcement("Important Announcement!", "We are going to fly to Mars.", Date.from(now)));
            add(new Announcement("Important Announcement!", "We are going to fly to the moon.", Date.from(now.minus(1, ChronoUnit.DAYS))));
            add(new Announcement("Important Announcement!", "We are going to fly to space.", Date.from(now.minus(2, ChronoUnit.DAYS))));
        }};
    }
}