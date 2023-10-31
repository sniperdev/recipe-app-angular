import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ShowRecipeComponent } from './components/show-recipe/show-recipe.component';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';

@NgModule({
  declarations: [HomeComponent, ShowRecipeComponent, AddEditRecipeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class HomeModule {}
