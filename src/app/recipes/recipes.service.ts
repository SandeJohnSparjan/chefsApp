import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{

    // recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Chicken curry',
            'Delicious Hyderabadi Chicken',
            'https://www.cookingclassy.com/wp-content/uploads/2018/08/chicken-curry-11-768x1152.jpg',
            [new Ingredient('Chicken legs',2),
            new Ingredient('Masala ', 1)]
            ),
        new Recipe(
            'Mutton Curry',
            'Amazing south Indan Mutton',
            'https://i0.wp.com/www.everydayindianrecipes.com/wp-content/uploads/2018/09/Mutton-Curry-EIR-1-1-of-1.jpg?w=600',
            [new Ingredient('Mutton legs',3),
            new Ingredient('oil packets',4)])
      ];
    

    constructor(private shoppinglistService: ShoppingListService){}
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppinglist(ingredients: Ingredient[]){
        this.shoppinglistService.addIngredients(ingredients);
    }

    updateRecipes(index: number){
        this.recipes[index]
    }
}