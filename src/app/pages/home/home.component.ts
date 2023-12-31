import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../shared/services/recipes.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowRecipeComponent } from './components/show-recipe/show-recipe.component';
import { Recipe } from '../../shared/utils/interfaces/recipe.interface';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { DialogMode } from '../../shared/utils/enums/DialogMode';
import { DialogRecipeData } from '../../shared/utils/enums/DialogRecipeData';

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
    protected recipeService: RecipesService,
    private dialog: MatDialog,
  ) {}

  public ngOnInit(): void {
    this.recipeService.getRecipeList();
  }

  protected addRecipe() {
    this.dialog.open(AddEditRecipeComponent, {
      data: {
        mode: DialogMode.add,
      },
      width: '60vw',
      height: '70vh',
    });
  }

  protected editRecipe(recipe: Recipe): void {
    this.dialog.open(AddEditRecipeComponent, {
      data: {
        mode: DialogMode.edit,
        value: recipe,
      } as DialogRecipeData,
      width: '60vw',
      height: '70vh',
    });
  }

  protected deleteRecipe(id: string): void {
    this.recipeService.deleteRecipe(id);
  }

  protected openRecipe(recipe: Recipe): void {
    this.dialog.open(ShowRecipeComponent, {
      data: recipe,
      width: '60vw',
    });
  }
}
