import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnnouncementComponent} from './component/announcement/announcement.component';
import {QuestionAndAnswerComponent} from './component/question-and-answer/question-and-answer.component';
import {UserComponent} from './component/user/user.component';

const routes: Routes = [
  { path: '', component: AnnouncementComponent},
  { path: 'questionsAndAnswers', component: QuestionAndAnswerComponent},
  { path: 'users', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
