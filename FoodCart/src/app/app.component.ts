import { Component } from '@angular/core';
import { Ingredient } from './shared/ingredients.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  featureLoaded = 'recipe';

  OnSelect(feature: string) {
    this.featureLoaded = feature;
  }
}
