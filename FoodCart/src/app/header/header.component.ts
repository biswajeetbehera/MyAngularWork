import { Component, OnInit } from '@angular/core';
import { RecipeDataService } from '../shared/Recipe-data.service';
import { Response } from '@angular/http';
import { AuthService } from '../shared/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor (private recipeData: RecipeDataService, private auth: AuthService) { }

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

  onLogout() {
    this.auth.logout();
  }

  authenticateUser() {
    return this.auth.authenticateUser();
  }

}
