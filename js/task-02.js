const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector(`id-ingredients`);
const ingredientsItems = ingredients.map((ingredients) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredients;
  return item;
});
ingredientsList.append(...ingredientsItems);
console.log(ingredientsList);
