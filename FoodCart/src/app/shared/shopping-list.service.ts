import { Ingredient } from 'src/app/shared/ingredients.modal';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    private _ingredients: Ingredient[] = [
        new Ingredient('Apples', 10),
        new Ingredient('tomatoes', 5)
    ];
    get ingredients() {
        return this._ingredients.slice();
    }

    ingredientChanged = new EventEmitter<Ingredient[]>();

    AddIngredient(ingredient: Ingredient) {
        this._ingredients.push(ingredient);
        this.ingredientChanged.emit(this._ingredients.slice());
    }

    AddIngredients(ingredients_new: Ingredient[]) {
        this._ingredients.push(...ingredients_new);
        this.ingredientChanged.emit(this._ingredients.slice());
    }
}
