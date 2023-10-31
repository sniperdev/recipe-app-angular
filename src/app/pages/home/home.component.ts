import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../shared/services/recipes.service';
import { MatDialog } from '@angular/material/dialog';
import { ShowRecipeComponent } from './components/show-recipe/show-recipe.component';
import { Recipe } from '../../shared/utils/interfaces/recipe.interface';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { DialogMode } from '../../shared/utils/enums/DialogMode';

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
  protected addRecipe() {
    this.dialog.open(AddEditRecipeComponent, {
      data: {
        mode: DialogMode.add,
      },
      width: '50vw',
      height: '50vh',
    });
  }

  protected deleteRecipe(id: string) {
    this.recipeService.deleteRecipe(id);
  }

  protected openRecipe(recipe: Recipe): void {
    this.dialog.open(ShowRecipeComponent, {
      data: recipe,
      width: '50vw',
    });
  }
}
