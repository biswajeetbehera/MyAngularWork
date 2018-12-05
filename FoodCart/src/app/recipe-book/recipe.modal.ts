import { Ingredient } from '../shared/ingredients.modal';

export class Recipe {
    constructor (public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]) { }
}
