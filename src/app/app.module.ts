import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SiteHeaderComponent} from "./components/site-header/site-header.component";
import {HomePageComponent} from "./components/home/home-page.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {AsideComponent} from "./components/aside/aside.component";
import {FirstLetterPipe} from "./pipes/first-letter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    /*Components*/
    HomePageComponent,
    SiteHeaderComponent,
    MainPageComponent,
    AsideComponent,

    /*pipes*/
    FirstLetterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
