import { Component } from '@angular/core';
import { Ingredient } from './shared/ingredients.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  featureLoaded = 'recipe';
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('tomatoes', 5)
  ];
  OnSelect(feature: string) {
    this.featureLoaded = feature;
  }
}
