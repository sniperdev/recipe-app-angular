import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../shared/services/recipes.service';

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

  constructor(private recipeService: RecipesService) {}

  public ngOnInit(): void {
    this.recipeService.getRecipeList();
  }
}
