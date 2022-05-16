import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { QuestionAndAnswerComponent } from './component/question-and-answer/question-and-answer.component';
import { AnnouncementComponent } from './component/announcement/announcement.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AnnouncementService} from './service/announcement.service';
import {QuestionAndAnswerService} from './service/question-and-answer.service';
import {UserService} from './service/user.service';
import {DatePipe} from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import {AuthenticationService} from './service/authentication.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpRequestInterceptor} from './helpers/http-request-interceptor';
import { MissingDataMessageComponent } from './component/missing-data-message/missing-data-message.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    QuestionAndAnswerComponent,
    AnnouncementComponent,
    LoginComponent,
    MissingDataMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AnnouncementService,
    QuestionAndAnswerService,
    UserService,
    AuthenticationService,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
