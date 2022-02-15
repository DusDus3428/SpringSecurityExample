import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MegaSecretComponent } from './component/mega-secret/mega-secret.component';
import { SecretComponent } from './component/secret/secret.component';
import { NonSecretComponent } from './component/non-secret/non-secret.component';

@NgModule({
  declarations: [
    AppComponent,
    MegaSecretComponent,
    SecretComponent,
    NonSecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
