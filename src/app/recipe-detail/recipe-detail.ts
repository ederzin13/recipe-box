import { Component, computed, input, signal } from '@angular/core';
import { RecipeModel } from '../models';

@Component({
  imports: [],
  selector: 'app-recipe-detail',
  styleUrl: './recipe-detail.css',
  templateUrl: './recipe-detail.html',
})
export class RecipeDetail {
  readonly recipe = input.required<RecipeModel>();

  protected readonly servings = signal<number>(1);

  protected incrementServings(): void {
    this.servings.update((current) => current + 1);
  }

  protected decrementServings(): void {
    this.servings.update((current) => current - 1);
  }

  protected readonly adjustedIngredients = computed(() => {
    return this.recipe().ingredients.map((ingredient) => {
      return {
        name: ingredient.name,
        quantity: ingredient.quantity * this.servings(),
        unit: ingredient.unit,
      };
    });
  });
}
