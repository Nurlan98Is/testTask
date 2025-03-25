export interface Product {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface ProductsState {
  allproducts: Product[];
  favoriteProducts: Product[];
  status: string;
  error: string | null;
}

export interface ProductDetails extends Product {
  strArea: string;
  strCategory: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strInstructions: string;
}

export interface ProductFormData {
  strMeal: string;
  country: string;
  category: string;
  ingredients: string;
  instructions: string;
}
