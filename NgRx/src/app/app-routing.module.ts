
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDemo1Component } from './Demo1/app-demo1.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'demo1', pathMatch: 'full'
  },
  {
    path: 'demo1', component: AppDemo1Component
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
