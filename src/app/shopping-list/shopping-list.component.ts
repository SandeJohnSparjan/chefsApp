import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from "../ingredient.model";
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsSub: Subscription;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.ingredientsSub = this.shoppinglistService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      )  
  }

  ngOnDestroy() {
    this.ingredientsSub.unsubscribe();
  }

  // shoppingListDetails(shoppingListData: Ingredient){
  //   this.ingredients.push(shoppingListData)
  // }

}
