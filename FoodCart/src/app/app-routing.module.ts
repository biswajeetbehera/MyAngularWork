import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'recipe', pathMatch: 'full' },
    { path: 'recipe', component: RecipeBookComponent },
    { path: 'shopping-list', component: ShopingListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
