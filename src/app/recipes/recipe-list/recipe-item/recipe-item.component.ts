import { Component, OnInit, Input} from '@angular/core';
import { Ingredient } from 'src/app/ingredient.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Input() recipeItem : Recipe; or
  @Input() recipeItem:{name:string, description:string, imagePath:string, ingredients: Ingredient[]};
  @Input() index : number;
 
  ngOnInit(): void {
  }

  
}
 