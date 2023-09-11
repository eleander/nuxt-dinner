export interface SearchDishes {
  results: SearchDishesResult[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface SearchDishesResult {
  id: number;
  title: Title;
  image: string;
  imageType: ImageType;
}

export enum ImageType {
  Jpg = "jpg",
}

export enum Title {
  Pizza = "pizza",
  PizzaDIP = "Pizza Dip",
  TitlePizza = "Pizza",
}

export interface DishDetails {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: any[];
  winePairing: WinePairing;
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  originalId: null;
}

export type ReducedDishDetails = Pick<
  DishDetails,
  | "id"
  | "pricePerServing"
  | "title"
  | "sourceUrl"
  | "image"
  | "instructions"
  | "extendedIngredients"
  | "dishTypes"
>;

export interface AnalyzedInstruction {
  name: string;
  steps: Step[];
}

export interface Step {
  number: number;
  step: string;
  ingredients: any[];
  equipment: Equipment[];
}

export interface Equipment {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface ExtendedIngredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: Measures;
}

export interface Measures {
  us: Metric;
  metric: Metric;
}

export interface Metric {
  amount: number;
  unitShort: string;
  unitLong: string;
}

export interface WinePairing {
  pairedWines: string[];
  pairingText: string;
  productMatches: ProductMatch[];
}

export interface ProductMatch {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  averageRating: number;
  ratingCount: number;
  score: number;
  link: string;
}
