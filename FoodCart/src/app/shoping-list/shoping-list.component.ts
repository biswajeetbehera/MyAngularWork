import { Ingredient } from './../shared/ingredients.modal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.sass']
})
export class ShopingListComponent implements OnInit {

  @Input() ingredients: Ingredient[];

  constructor () { }

  ngOnInit() {
  }

}
