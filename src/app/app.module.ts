import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { VacancyComponent } from './vacancy/vacancy.component';

import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {CommonModule} from '@angular/common';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import {RouterOutlet} from "@angular/router";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    VacancyComponent,
    CompanyDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterOutlet,
    RouterOutlet

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
