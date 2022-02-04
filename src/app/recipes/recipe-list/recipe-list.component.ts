import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe [] = [
    new Recipe ("A Test Recipe", "This is simply a test","https://images.themodernproper.com/billowy-turkey/production/posts/2021/Grilled-Sweet-Potatoes-9.jpeg?w=1280&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1628395628&s=53f098edd3dad2dc0d949446f026bfb1"),
    new Recipe ("A Test Recipe 2", "This is simply a test","https://images.themodernproper.com/billowy-turkey/production/posts/2021/Grilled-Sweet-Potatoes-9.jpeg?w=1280&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1628395628&s=53f098edd3dad2dc0d949446f026bfb1"),
    new Recipe ("A Test Recipe 3", "This is simply a test","https://images.themodernproper.com/billowy-turkey/production/posts/2021/Grilled-Sweet-Potatoes-9.jpeg?w=1280&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1628395628&s=53f098edd3dad2dc0d949446f026bfb1"),
    new Recipe ("A Test Recipe 4", "This is simply a test","https://images.themodernproper.com/billowy-turkey/production/posts/2021/Grilled-Sweet-Potatoes-9.jpeg?w=1280&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1628395628&s=53f098edd3dad2dc0d949446f026bfb1")



  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
