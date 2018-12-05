import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.sass']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() detailRecipe: Recipe;

  constructor (public recipeService: RecipeService) { }

  ngOnInit() { }

  AddIngredients() {
    // event.stopPropagation();
    this.recipeService.AddIngredients(this.detailRecipe.ingredients);
  }

}
