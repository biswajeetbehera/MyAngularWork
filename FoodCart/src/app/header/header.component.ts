import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../shared/Recipe-data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  constructor (private recipeData: RecipeDataService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.recipeData.saveRecipeData().subscribe((response: Response) => {
      console.log(response.json());
    });
  }

  onFetchData() {
    this.recipeData.getRecipeData();
  }

}
