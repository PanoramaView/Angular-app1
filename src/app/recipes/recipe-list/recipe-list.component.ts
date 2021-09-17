import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('RecipeName', 
    'Recipe Description', 
    'https://ams3.digitaloceanspaces.com/sempionenews/2018/06/street-food-cassano-magnago-2018-3.jpg'),
    new Recipe('RecipeName2', 
    'Recipe Description2', 
    'https://ams3.digitaloceanspaces.com/sempionenews/2018/06/street-food-cassano-magnago-2018-3.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
