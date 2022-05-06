import { Component } from '@angular/core';
import {AuthenticationService} from './service/authentication.service';
import {Router} from "@angular/router";
import {AuthenticationCredentials} from "./model/authentication-credentials";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Space Travels Fan Page';
  authenticatedUser: AuthenticationCredentials;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.authenticatedUserAsObservable.subscribe(authenticatedUser => this.authenticatedUser = authenticatedUser);
  }

  logout() {
    this.authenticationService.logout();
  }
}
