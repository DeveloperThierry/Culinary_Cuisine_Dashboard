import { ReactNode } from "react";

// Define the Recipe interface
export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  // Add any additional properties as needed
}

// Define the props for the Search component
export interface SearchProps {
  foodData: Recipe[];
  setFoodData: (data: Recipe[]) => void; // Optional setter for food data
}

// Define the props for the FoodItem component
export interface FoodItemProps {
  food: Recipe; // The food item
  setFoodId: (id: number) => void; // Function to set the food ID
}

// Define the props for the FoodList component
export interface FoodListProps {
  setFoodId: (id: number) => void; // Function to set the food ID
  foodData: Recipe[];
  setFoodData?: (data: Recipe[]) => void; // Optional setter for food data
}

// Define the props for the Container component
export interface ContainerProps {
  children: ReactNode; // Children elements
}

// Define the props for the InnerContainer component
export interface InnerContainerProps {
  children: ReactNode; // Children elements
}

// Define the props for the FoodDetails component
export interface FoodDetailsProps {
  foodId: number; // The food ID to fetch details
}

// Define the props for the FoodIdProp interface if needed
export interface FoodIdProp {
  foodId: number; // Define the type for foodId
}

// export interface FoodProp {
//   [key: string]: any; // This allows any key with a string type and any value type
// }
export interface FoodPropsWrapper {
  food: FoodProp; // FoodProp is the interface you defined earlier
}
export interface FoodProp {
  id: number;
  image: string;
  imageType: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
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
  license: string | null;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: ExtendedIngredient[];
  analyzedInstructions: AnalyzedInstruction[];
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
  us: Measurement;
  metric: Measurement;
}

export interface Measurement {
  amount: number;
  unitShort: string;
  unitLong: string;
}

export interface AnalyzedInstruction {
  name: string;
  steps: Step[];
}

export interface Step {
  number: number;
  step: string;
  ingredients: Ingredient[];
  equipment: Equipment[];
}

export interface Ingredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface Equipment {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}
