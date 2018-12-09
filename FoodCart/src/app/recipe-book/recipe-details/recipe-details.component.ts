import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.sass']
})
export class RecipeDetailsComponent implements OnInit {
  detailRecipe: Recipe;

  constructor (public recipeService: RecipeService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.detailRecipe = this.recipeService.getRecipeById(+params['id']);
    });
  }

  AddIngredients() {
    // event.stopPropagation();
    this.recipeService.AddIngredients(this.detailRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
