import { RecipeService } from './../recipe.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor (public recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.recipes;
  }

  OnClick(recipe: Recipe) {
    this.recipeService.recipeClicked.emit(recipe);
  }
}
