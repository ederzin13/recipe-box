import { Component, computed, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RecipeModel } from '../models';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
  imports: [RouterOutlet, JsonPipe, RecipeDetail],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);

  protected selectSpaghetti(): void {
    console.log('Spaghetti Carbonara selecionado');

    this.recipe.set(MOCK_RECIPES[0]);
  }

  protected selectSalad(): void {
    console.log('Caprese Salad selecionada');

    this.recipe.set(MOCK_RECIPES[1]);
  }
}
