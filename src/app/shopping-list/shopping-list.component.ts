import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

 ingredients : IngredientModel [];
 private igChanegeSub:Subscription;

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.igChanegeSub = this.slService.ingredientsChanged
      .subscribe(
      (ingredients:IngredientModel[]) => {
        this.ingredients =ingredients} );

  }

  ngOnDestroy():void {
    this.igChanegeSub.unsubscribe();
  }


}

