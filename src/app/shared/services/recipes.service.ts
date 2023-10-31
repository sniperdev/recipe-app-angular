import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from '../utils/interfaces/recipe.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipeList: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>(
    [],
  );

  public get recipeList$(): Observable<Recipe[]> {
    return this.recipeList.asObservable();
  }

  constructor(private http: HttpClient) {}

  public getRecipeList(): void {
    this.http
      .get<Recipe[]>('http://localhost:8080/api/recipes')
      .subscribe((recipes) => {
        this.recipeList.next(recipes);
      });
  }

  public addRecipe(recipe: Recipe): void {
    this.http
      .post<Recipe>('http://localhost:8080/api/recipes/add', recipe)
      .subscribe(() => {
        this.getRecipeList();
      });
  }

  public editRecipe(id: string, client: Recipe): void {
    this.http
      .put<Recipe>(`http://localhost:8080/api/recipes/update/${id}`, client)
      .subscribe(() => this.getRecipeList());
  }

  public deleteRecipe(id: string): void {
    this.http
      .delete(`http://localhost:8080/api/recipes/delete/${id}`)
      .subscribe(() => {
        this.getRecipeList();
      });
  }
}
