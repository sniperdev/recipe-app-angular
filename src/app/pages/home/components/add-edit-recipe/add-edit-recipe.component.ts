import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
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

  protected addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        name: ['', Validators.required],
        quantity: ['', Validators.required],
      }),
    );
  }
}
