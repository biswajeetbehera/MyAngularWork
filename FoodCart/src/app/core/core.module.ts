import { RecipeDataService } from './../shared/Recipe-data.service';
import { RecipeService } from './../recipe-book/recipe.service';
import { HomeComponent } from './../home/home.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { ShoppingListService } from '../shared/shopping-list.service';
import { AuthService } from '../shared/auth.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        SharedModule
    ],
    exports: [
        HeaderComponent,
        HomeComponent,
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        RecipeDataService,
        AuthService,
    ],
})
export class CoreModule { }
