import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Recipe } from '../../../../shared/utils/interfaces/recipe.interface';

@Component({
  selector: 'app-show-recipe',
  templateUrl: './show-recipe.component.html',
  styleUrls: ['./show-recipe.component.scss'],
})
export class ShowRecipeComponent {
  constructor(
    private dialogRef: MatDialogRef<ShowRecipeComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: Recipe,
  ) {}
}
