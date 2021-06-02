import { Component, OnInit, ViewChild,EventEmitter, Output, ElementRef  } from '@angular/core';

import { Ingredient } from 'src/app/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName',{static: false}) inputName: ElementRef;
  @ViewChild('inputAmount',{static: false}) inputAmount: ElementRef; 

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd(){
    const ingName = this.inputName.nativeElement.value;
    const ingAmount =this.inputAmount.nativeElement.value;
    const ingDetails = new Ingredient(ingName, ingAmount);
    this.shoppinglistService.addIngredient(ingDetails);
  }

}
