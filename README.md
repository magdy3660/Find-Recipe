# Find Recipes Project Documentation
![image](https://github.com/abdomagdy0/Find-Recipe/assets/91535529/d0367ef4-205a-4914-9bd9-afd26f28d480)

## Table of Contents
1. [Introduction](#introduction)
5. [JavaScript Functionality](#javascript-functionality)

---

## 1. Introduction <a name="introduction"></a>

The "Find Recipes" project is a web application that allows users to search for recipes, get random recipes, and explore recipes by category. This documentation provides an overview of the project structure, HTML layout, CSS styles, and JavaScript functionality.

---

### Recipe Cards Styles

- Recipe cards are displayed as a flex container with border and margin.

---

## 5. JavaScript Functionality <a name="javascript-functionality"></a>

### Functions

1. **searchRecipes()**
   - Fetches recipes based on user input from an external API.
   - Calls `displayRecipes()` to show the results.
   ![image](https://github.com/abdomagdy0/Find-Recipe/assets/91535529/fe9ee4bd-693c-4f2e-8374-3f42a74a55d0)  
2. **getIngredientsList(recipe)**
   - Generates an HTML list of ingredients and measures for a given recipe.
****


3. **getRandomRecipe()**
   - Fetches a random recipe from an external API.
   - Calls `displayRecipes()` to show the result.


4. **searchByCategory(category)**
   - Fetches recipes based on a selected category from an external API.
   - Calls `displayRecipes()` to show the results.

5. **displayRecipes(recipes)**
   - Dynamically creates and displays recipe cards on the webpage.

![image](https://github.com/abdomagdy0/Find-Recipe/assets/91535529/44ff96d3-590a-4936-8fa4-09072719bb03)

---
