/*--------------------------------------------------
* @project PHP
* @file    .../app/app.module.ts
* --------------------------------------------------
* @Date:   2020-08-02 02:24:54
* @Author: Phan Huu Tuan | pi.huutuan@gmail.com
* 
* @Last Modified by:   Phan Huu Tuan
* @Last Modified time: 2020-08-02 11:32:13
* --------------------------------------------------*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
