import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLandingPageComponent } from './home-landing-page/home-landing-page.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';

@NgModule({
    declarations: [AppComponent, HomeLandingPageComponent, NavbarComponentComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatGridListModule, 
        MatCardModule, MatToolbarModule, MatButtonModule, MatIconModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
