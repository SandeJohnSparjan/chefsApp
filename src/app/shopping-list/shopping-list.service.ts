
import { Ingredient } from "../ingredient.model";

import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('Masala',5),
        new Ingredient('Chicken',4),
        new Ingredient('Salt',1),
      ];

    getIngredients(){
       return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // for (let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}