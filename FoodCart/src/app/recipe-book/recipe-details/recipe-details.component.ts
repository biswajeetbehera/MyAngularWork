import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.sass']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() detailRecipe: Recipe;
  constructor () { }

  ngOnInit() {
  }

}
