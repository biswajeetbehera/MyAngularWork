import { ShoppingListService } from '../shared/shopping-list.service';
import { Recipe } from './recipe.modal';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.modal';

@Injectable()
export class RecipeService {
    private _recipes: Recipe[] = [
        new Recipe(0, 'Test Recipe',
            'this is Test Recipe',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [
                new Ingredient('Hem', 5),
                new Ingredient('onion', 10)
            ])
    ];

    // recipeClicked = new EventEmitter<Recipe>();

    get recipes() {
        return this._recipes.slice();
    }

    getRecipeById(id: number) {
        return this._recipes.find((recp) => recp.id === id);
    }

    AddIngredients(ingredients: Ingredient[]) {
        this.shopService.AddIngredients(ingredients);
    }
    constructor (private shopService: ShoppingListService) { }
}
