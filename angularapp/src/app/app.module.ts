import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { ListTeamsComponent } from './list-teams/list-teams.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './home/home.component';
import { FindTeamComponent } from './find-team/find-team.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTeamsComponent,
    LoginComponent,
    HomeComponent,
    FindTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
