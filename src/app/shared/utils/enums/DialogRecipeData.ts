import { DialogMode } from './DialogMode';
import { Recipe } from '../interfaces/recipe.interface';

export interface DialogRecipeData {
  mode: DialogMode;
  value: Recipe;
}
