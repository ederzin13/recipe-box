import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';
import { JsonPipe } from '@angular/common';
import { RecipeList } from './recipe-list/recipe-list';

@Component({
  imports: [RouterOutlet, JsonPipe, RecipeList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('My Recipe Box');
}
