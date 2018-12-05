import { ShoppingListService } from '../shared/shopping-list.service';
import { Recipe } from './recipe.modal';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.modal';

@Injectable()
export class RecipeService {
    private _recipes: Recipe[] = [
        new Recipe('Test Recipe',
            'this is Test Recipe',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Hem', 5),
                new Ingredient('onion', 10)
            ])
    ];

    recipeClicked = new EventEmitter<Recipe>();

    get recipes() {
        return this._recipes.slice();
    }

    AddIngredients(ingredients: Ingredient[]) {
        this.shopService.AddIngredients(ingredients);
    }
    constructor (public shopService: ShoppingListService) { }
}
