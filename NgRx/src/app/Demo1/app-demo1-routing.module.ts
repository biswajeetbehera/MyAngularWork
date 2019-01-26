import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { AppDemo1Component } from './app-demo1.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppDemo1Component,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'products',
        // canActivate: [AuthGuard],
        loadChildren: './products/product.module#ProductModule'
      },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppDemo1RoutingModule { }
