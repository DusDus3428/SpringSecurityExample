import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials: FormGroup;
  showAuthenticationErrorMessage: boolean = false;

  constructor(private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.credentials = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  login() {
    this.authenticationService.login({username: this.credentials.get('username').value, password: this.credentials.get('password').value})
      .subscribe({
        error: error => {
          this.showAuthenticationErrorMessage = true;
        }
      })
  }
}
