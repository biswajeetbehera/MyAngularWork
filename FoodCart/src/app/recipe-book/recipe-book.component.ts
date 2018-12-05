import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.modal';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.sass'],
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {
  recipeClicked: Recipe;
  constructor (public recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeClicked.subscribe((recipe) => this.recipeClicked = recipe);
  }

}
