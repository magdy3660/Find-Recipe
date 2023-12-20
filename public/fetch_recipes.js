// public/script.js

async function searchRecipes() {
    const query = document.getElementById('searchInput').value;
    const response = await fetch(`/search/${query}`);
    const recipes = await response.json();

    displayRecipes(recipes);
}

function getIngredientsList(recipe) {
    let ingredientsList = '';
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];

        if (ingredient && measure) {
            ingredientsList += `<li>${measure} ${ingredient}</li>`;
        } else if (ingredient) {
            ingredientsList += `<li>${ingredient}</li>`;
        }
    }
    return ingredientsList;
}

async function getRandomRecipe() {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const randomRecipe = await response.json();

        displayRecipes(randomRecipe.meals);
    } catch (error) {
        console.error('Error fetching random recipe:', error.message);
    }
}

async function searchByCategory(category) {
    try {
        const response = await fetch(`/search/${category}`);
        const recipes = await response.json();

        displayRecipes(recipes);
    } catch (error) {
        console.error(`Error fetching ${category} recipes:`, error.message);
    }
}

function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.innerHTML = `
            <div class='recipe-cards'>
                <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
                <div class='recipe-info'>
                    <h2>${recipe.strMeal}</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        ${getIngredientsList(recipe)}
                    </ul>
                    <h2>Instructions</h2>
                    <p>${recipe.strInstructions}</p>
                </div>
            </div>
        `;
        recipeList.appendChild(recipeCard);
    });
}
