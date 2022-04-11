import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { QuestionAndAnswerComponent } from './component/question-and-answer/question-and-answer.component';
import { AnnouncementComponent } from './component/announcement/announcement.component';
import {HttpClientModule} from '@angular/common/http';
import {AnnouncementService} from './service/announcement.service';
import {QuestionAndAnswerService} from './service/question-and-answer.service';
import {UserService} from './service/user.service';
import {DatePipe} from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import {AuthenticationService} from './service/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    QuestionAndAnswerComponent,
    AnnouncementComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AnnouncementService, QuestionAndAnswerService, UserService, AuthenticationService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
