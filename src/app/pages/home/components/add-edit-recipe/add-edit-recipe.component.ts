import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipesService } from '../../../../shared/services/recipes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogRecipeData } from '../../../../shared/utils/enums/DialogRecipeData';
import { DialogMode } from '../../../../shared/utils/enums/DialogMode';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss'],
})
export class AddEditRecipeComponent implements OnInit {
  protected recipeForm!: FormGroup;

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private recipesService: RecipesService,
    private dialogRef: MatDialogRef<AddEditRecipeComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogRecipeData,
  ) {}

  ngOnInit() {
    this.createForm();

    if (DialogMode.edit === this.data.mode) {
      this.recipeForm.patchValue(this.data.value);
    }
  }

  protected onSubmit(): void {
    if (DialogMode.edit === this.data.mode) {
      this.recipesService.editRecipe(
        this.data.value.id.toString(),
        this.recipeForm.value,
      );
    } else {
      this.recipesService.addRecipe(this.recipeForm.value);
    }

    this.dialogRef.close();
  }

  private createForm(): void {
    this.recipeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      preparationTime: ['', [Validators.required, Validators.min(1)]],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(15),
          Validators.maxLength(255),
        ],
      ],
      ingredients: this.fb.array(
        [
          this.fb.group({
            name: ['', Validators.required],
            quantity: ['', Validators.required],
          }),
          this.fb.group({
            name: ['', Validators.required],
            quantity: ['', Validators.required],
          }),
        ],
        [Validators.required, Validators.minLength(2)],
      ),
    });
  }

  protected removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  protected addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: ['', Validators.required],
      }),
    );
  }
}
