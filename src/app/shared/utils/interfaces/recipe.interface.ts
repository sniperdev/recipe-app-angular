export interface Recipe {
  id: number;
  name: string;
  description: string;
  preparationTime: string;
  ingredients: { name: string; quantity: 'string' }[];
}
