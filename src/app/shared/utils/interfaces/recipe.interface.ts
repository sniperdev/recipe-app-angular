export interface Recipe {
  id: number;
  name: string;
  preparationTime: string;
  ingredients:{name:string,quantity:"string"}[]
}
