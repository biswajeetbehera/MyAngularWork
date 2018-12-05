import { ShoppingListService } from '../../shared/shopping-list.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.modal';

@Component({
  selector: 'app-shoping-list-edit',
  templateUrl: './shoping-list-edit.component.html',
  styleUrls: ['./shoping-list-edit.component.sass']
})
export class ShopingListEditComponent implements OnInit {
  @ViewChild('ingredientName') ingredName: ElementRef;
  @ViewChild('ingredientAmount') ingredAmount: ElementRef;

  constructor (public shopService: ShoppingListService) { }

  ngOnInit() {
  }
  AddIngredient(event: Event) {
    event.preventDefault();
    const name = this.ingredName.nativeElement.value;
    const amount = this.ingredAmount.nativeElement.value;
    const ingredient = new Ingredient(name, amount);

    this.shopService.AddIngredient(ingredient);
  }
}
