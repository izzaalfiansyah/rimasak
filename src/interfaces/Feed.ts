import IngredientLine from "./IngredientLine";

interface Feed {
  display: {
    displayName: string;
    images: string[];
  };
  content: {
    description: {
      text: string;
    };
    details: {
      id: string;
      recipeId: string;
      globalId: string;
      rating?: number;
      totalTime: string;
    };
    ingredientLines: Array<IngredientLine>;
    preparationSteps: Array<string>;
  };
}

export default Feed;
