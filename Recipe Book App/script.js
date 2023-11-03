const API_KEY = "151bd60c6acd4a8a837266e00c243362";

const recipeListEl = document.querySelector("#recipe-list");

function displayRecipes(recipes) {
  recipeListEl.innerHTML = "";
  //   empty HTML init
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");
    const recipeImageEl = document.createElement("img");
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = "recipe image";

    const recipeTitleEl = document.createElement("h2");
    recipeTitleEl.innerText = recipe.title;

    recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML = `
          <strong>Ingredients:</strong> ${recipe.extendedIngredients
            .map((ingredient) => ingredient.original)
            .join(", ")}
      `;

    const recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerText = "View Recipe";

    recipeLinkEl.innertext = recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl);
    recipeListEl.appendChild(recipeItemEl);
  });
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=3&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  console.log(recipes);
  displayRecipes(recipes);
}

init();
