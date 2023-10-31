import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../shared/services/recipes.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowRecipeComponent } from './components/show-recipe/show-recipe.component';
import { Recipe } from '../../shared/utils/interfaces/recipe.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  protected recipeList$ = this.recipeService.recipeList$;
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'preparationTime',
    'options',
  ];

  constructor(
    private recipeService: RecipesService,
    private dialog: MatDialog,
  ) {}

  public ngOnInit(): void {
    this.recipeService.getRecipeList();
  }

  protected deleteClient(id: string) {
    this.recipeService.deleteRecipe(id);
  }

  protected openRecipe(recipe: Recipe): void {
    this.dialog.open(ShowRecipeComponent, {
      data: recipe,
      width: '50vw',
    });
  }
}
