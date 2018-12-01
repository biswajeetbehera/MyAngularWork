import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.sass']
})
export class RecipeBookComponent implements OnInit {
  recipeClicked: Recipe;
  constructor () { }

  ngOnInit() {
  }

  OnRecipeClicked(recipe: Recipe) {
    this.recipeClicked = recipe;
  }

}
