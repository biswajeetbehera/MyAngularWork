import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppDemo1RoutingModule } from './app-demo1-routing.module';

import { AppDemo1Component } from './app-demo1.component';
import { MenuComponent } from './home/menu.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';

/* Feature Modules */
import { UserModule } from './user/user.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    UserModule,
    AppDemo1RoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Demo1 app store',
      logOnly: environment.production,
      maxAge: 25,
    })
  ],
  declarations: [
    AppDemo1Component,
    MenuComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
})
export class AppDemo1Module { }
