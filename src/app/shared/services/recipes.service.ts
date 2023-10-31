import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Recipe } from '../utils/interfaces/recipe.interface';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../utils/api-url';

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
    this.http.get<Recipe[]>(apiUrl).subscribe((recipes) => {
      this.recipeList.next(recipes);
    });
  }

  public addRecipe(recipe: Recipe): void {
    this.http.post<Recipe>(`${apiUrl}/add`, recipe).subscribe(() => {
      this.getRecipeList();
    });
  }

  public editRecipe(id: string, recipe: Recipe): void {
    this.http
      .put<Recipe>(`${apiUrl}/update/${id}`, recipe)
      .subscribe(() => this.getRecipeList());
  }

  public deleteRecipe(id: string): void {
    this.http.delete(`${apiUrl}/delete/${id}`).subscribe(() => {
      this.getRecipeList();
    });
  }
}
