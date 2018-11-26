import { Ingredient } from './../shared/ingredients.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.sass']
})
export class ShopingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('tomatoes', 5)
  ];

  constructor() { }

  ngOnInit() {
  }

}
