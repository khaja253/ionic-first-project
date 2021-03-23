import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes: Recipe [] = [
    {
      id: 'r1',
      title: 'Cheese Chilli',
      imageUrl: 'https://www.indianfoodforever.com/iffwd/wp-content/uploads/chilly-paneer.jpg',
      ingredients: ['Cheese','Green Pepper','Onion','Milk cream','Garlic','Ginger','Tomato'],
      review: 'This is very spice food recipe to eat with rice, chapati or separate.'
  },
  {
    id: 'r2',
    title: 'Kheer',
    imageUrl: 'https://c.ndtvimg.com/2018-10/6n7i40g8_sharad-purnima-2018-kheer-recipe-and-benefits_625x300_23_October_18.jpg',
    ingredients: ['Milk','Rice','Sugar','Flavour','Coconut Powder','Dry Fruits'],
    review: 'This is very tasty indian dessert to eat with or after dinner.'
  }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}