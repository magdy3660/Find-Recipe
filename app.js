const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
// Create an Express application
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse incoming requests with JSON and URL encoding
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Define routes
// Home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Recipe search endpoint
app.get('/search/:query', async (req, res) => {
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${req.params.query}`);
        const recipes = response.data.meals;
        res.json(recipes);
    } catch (error) {
        console.error('Error fetching recipes:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
