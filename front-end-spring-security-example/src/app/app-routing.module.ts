import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NonSecretComponent} from './component/non-secret/non-secret.component';
import {SecretComponent} from './component/secret/secret.component';
import {MegaSecretComponent} from './component/mega-secret/mega-secret.component';

const routes: Routes = [
  { path: 'nonSecret', component: NonSecretComponent},
  { path: 'secret', component: SecretComponent},
  { path: 'megaSecret', component: MegaSecretComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
