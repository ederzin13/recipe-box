import { Component, computed, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RecipeModel } from '../models';

@Component({
  imports: [RouterOutlet, JsonPipe],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal<number>(1);

  protected readonly adjustedIngredients = computed(() => {
    return this.recipe().ingredients.map((ingredient) => {
      return {
        name: ingredient.name,
        quantity: ingredient.quantity * this.servings(),
        unit: ingredient.unit,
      };
    });
  });

  protected selectSpaghetti(): void {
    console.log('Spaghetti Carbonara selecionado');

    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected selectSalad(): void {
    console.log('Caprese Salad selecionada');

    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected incrementServings(): void {
    this.servings.update((current) => current + 1);
  }

  protected decrementServings(): void {
    this.servings.update((current) => current - 1);
  }
}
