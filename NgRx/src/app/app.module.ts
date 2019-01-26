import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDemo1Module } from './Demo1/app-demo1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppDemo1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
