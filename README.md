# Find Recipes Project Documentation
![image](https://github.com/abdomagdy0/Find-Recipe/assets/91535529/d0367ef4-205a-4914-9bd9-afd26f28d480)

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [HTML Structure](#html-structure)
4. [CSS Styles](#css-styles)
5. [JavaScript Functionality](#javascript-functionality)
6. [Usage](#usage)

---

## 1. Introduction <a name="introduction"></a>

The "Find Recipes" project is a web application that allows users to search for recipes, get random recipes, and explore recipes by category. This documentation provides an overview of the project structure, HTML layout, CSS styles, and JavaScript functionality.

---

## 2. Project Structure <a name="project-structure"></a>

The project consists of the following key files:

- **index.html**: Main HTML file containing the structure of the webpage.
- **style.css**: CSS file with styles for visual appearance.
- **fetch_recipes.js**: JavaScript file handling recipe fetching and display logic.

---

## 3. HTML Structure <a name="html-structure"></a>

The HTML structure is organized into sections, including navigation, title, search, category links, and a container for displaying recipe lists.

---

## 4. CSS Styles <a name="css-styles"></a>

### General Styles

- Body color is set to black on a light gray background.
- The image wrap uses a chef image as a background.

### Title Section Styles

- Title text is styled with a green color and a large font size.

### Search Section Styles

- Search box has a margin-top of 100px.
- Search input has padding, border, and border-radius styles.

### Category Links Styles

- Font size is set to 1.3em, with links having specific styling on hover.

### Button Styles

- Buttons have a green background color, padding, and border-radius.
- Hover effect changes text color and background color.

### Recipe Cards Styles

- Recipe cards are displayed as a flex container with border and margin.

---

## 5. JavaScript Functionality <a name="javascript-functionality"></a>

### Functions

1. **searchRecipes()**
   - Fetches recipes based on user input from an external API.
   - Calls `displayRecipes()` to show the results.

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

---

## 6. Usage <a name="usage"></a>

To use the "Find Recipes" application:

1. Open the `index.html` file in a web browser.
2. Interact with the search bar, category links, and buttons for searching or getting random recipes.
3. Explore the displayed recipes with detailed information, including ingredients and instructions.

---
