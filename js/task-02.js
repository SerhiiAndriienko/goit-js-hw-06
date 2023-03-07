const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const createIngredientsList = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = `${ingredient}`;
    ingredientEl.classList.add("item");
    return ingredientEl;
  });
};

const ingredientsItems = createIngredientsList(ingredients);
ingredientsList.append(...ingredientsItems);
