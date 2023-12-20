async function searchRecipes() {
    const query = document.getElementById('searchInput').value;
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();

    displayRecipes(data.meals);
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
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await response.json();

        // Extract the meal details using the ids obtained from the category search
        const mealIds = data.meals.map(meal => meal.idMeal);
        const recipes = await Promise.all(mealIds.map(id => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(response => response.json())));

        displayRecipes(recipes.map(recipe => recipe.meals[0]));
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
        <h1>${recipe.strMeal}</h1>
        <h3>Ingredients:</h3>
        <ul>
            ${getIngredientsList(recipe)}
        </ul>
        <h3>Instructions:</h3>
        <p>${recipe.strInstructions}</p>
    </div>
</div>
        `;
        recipeList.appendChild(recipeCard);
    });
}