const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Adjust the path if needed

const recipes = [
    {
        "name": "Spaghetti Carbonara",
        "category": "Pasta",
        "cooking_time": "25 minutes",
        "ingredients": [
          "200g spaghetti",
          "100g pancetta",
          "2 large eggs",
          "50g parmesan cheese",
          "1 clove garlic",
          "Salt",
          "Pepper"
        ],
        "instructions": [
          "1. Cook the spaghetti in salted boiling water according to package instructions.",
          "2. In a pan, cook pancetta with garlic until crispy.",
          "3. Beat the eggs and mix with grated parmesan, salt, and pepper.",
          "4. Drain the spaghetti and combine with pancetta and garlic.",
          "5. Off the heat, stir in the egg mixture quickly to avoid scrambling.",
          "6. Serve with extra parmesan and black pepper."
        ],
        "dietary": ["gluten-free"],
        "image": "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D"
      },
      {
        "name": "Vegetable Stir Fry",
        "category": "Main Course",
        "cooking_time": "20 minutes",
        "ingredients": [
          "1 cup broccoli florets",
          "1 bell pepper, sliced",
          "1 carrot, sliced",
          "2 tbsp soy sauce",
          "1 tbsp olive oil",
          "1 clove garlic, minced",
          "1 tsp ginger, minced"
        ],
        "instructions": [
          "1. Heat olive oil in a pan over medium heat.",
          "2. Add garlic and ginger, sauté for 1 minute.",
          "3. Add vegetables and stir fry until tender-crisp.",
          "4. Add soy sauce and stir to combine.",
          "5. Serve hot."
        ],
        "dietary": ["vegetarian", "gluten-free"],
        "image": "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D"
      },
      {
        "name": "Chicken Caesar Salad",
        "category": "Salad",
        "cooking_time": "15 minutes",
        "ingredients": [
          "2 cups romaine lettuce",
          "1 grilled chicken breast, sliced",
          "1/4 cup Caesar dressing",
          "2 tbsp grated parmesan cheese",
          "Croutons"
        ],
        "instructions": [
          "1. Toss lettuce with Caesar dressing.",
          "2. Top with sliced chicken, parmesan cheese, and croutons.",
          "3. Serve immediately."
        ],
        "dietary": [],
       "image": "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D"
         },
      {
        "name": "Quinoa Salad",
        "category": "Salad",
        "cooking_time": "25 minutes",
        "ingredients": [
          "1 cup quinoa",
          "1 cup cherry tomatoes, halved",
          "1 cucumber, diced",
          "1/4 cup feta cheese",
          "2 tbsp olive oil",
          "1 tbsp lemon juice",
          "Salt and pepper to taste"
        ],
        "instructions": [
          "1. Cook quinoa according to package instructions and let cool.",
          "2. In a bowl, combine quinoa, cherry tomatoes, cucumber, and feta cheese.",
          "3. Drizzle with olive oil and lemon juice.",
          "4. Season with salt and pepper and toss to combine.",
          "5. Serve chilled."
        ],
        "dietary": ["vegetarian", "gluten-free"],
       "image": "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D"
        },
      {
        "name": "Beef Tacos",
        "category": "Main Course",
        "cooking_time": "30 minutes",
        "ingredients": [
          "500g ground beef",
          "1 taco seasoning packet",
          "8 taco shells",
          "1 cup shredded lettuce",
          "1/2 cup diced tomatoes",
          "1/2 cup shredded cheddar cheese",
          "Sour cream and salsa for topping"
        ],
        "instructions": [
          "1. Cook ground beef in a skillet over medium heat until browned.",
          "2. Add taco seasoning and follow package instructions.",
          "3. Warm taco shells according to package directions.",
          "4. Fill taco shells with beef, lettuce, tomatoes, and cheese.",
          "5. Top with sour cream and salsa as desired."
        ],
        "dietary": [],
    "image": "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D"
           },
      {
        "name": "Avocado Toast",
        "category": "Breakfast",
        "cooking_time": "10 minutes",
        "ingredients": [
          "2 slices of bread",
          "1 ripe avocado",
          "1 tbsp lemon juice",
          "Salt and pepper to taste",
          "Red pepper flakes (optional)"
        ],
        "instructions": [
          "1. Toast the bread slices.",
          "2. Mash the avocado and mix with lemon juice, salt, and pepper.",
          "3. Spread the avocado mixture onto the toasted bread.",
          "4. Sprinkle with red pepper flakes if desired."
        ],
        "dietary": ["vegetarian", "gluten-free if using gluten-free bread"],
  "image": "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D"
           },
      {
        "name": "Lentil Soup",
        "category": "Soup",
        "cooking_time": "40 minutes",
        "ingredients": [
          "1 cup dried lentils",
          "1 onion, chopped",
          "2 carrots, diced",
          "2 celery stalks, diced",
          "2 cloves garlic, minced",
          "1 can diced tomatoes",
          "4 cups vegetable broth",
          "2 tsp cumin",
          "Salt and pepper to taste"
        ],
        "instructions": [
          "1. Rinse lentils and set aside.",
          "2. In a large pot, sauté onion, carrots, celery, and garlic until softened.",
          "3. Add lentils, diced tomatoes, and vegetable broth.",
          "4. Season with cumin, salt, and pepper.",
          "5. Bring to a boil, then simmer for 30 minutes or until lentils are tender."
        ],
        "dietary": ["vegetarian", "gluten-free"],
        "image": "https://images.unsplash.com/photo-1603394538344-2aa6658c79dd"
      },
      {
        "name": "Greek Yogurt with Honey and Berries",
        "category": "Dessert",
        "cooking_time": "5 minutes",
        "ingredients": [
          "1 cup Greek yogurt",
          "2 tbsp honey",
          "1/2 cup mixed berries (strawberries, blueberries, raspberries)"
        ],
        "instructions": [
          "1. Spoon Greek yogurt into a bowl.",
          "2. Drizzle with honey.",
          "3. Top with mixed berries."
        ],
        "dietary": ["vegetarian"],
        "image": "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D"
          },
      {
        "name": "Vegetarian Chili",
        "category": "Main Course",
        "cooking_time": "45 minutes",
        "ingredients": [
          "1 can black beans",
          "1 can kidney beans",
          "1 can diced tomatoes",
          "1 onion, chopped",
          "1 bell pepper, chopped",
          "2 cloves garlic, minced",
          "2 tbsp chili powder",
          "1 tsp cumin",
          "Salt and pepper to taste"
        ],
        "instructions": [
          "1. In a large pot, sauté onion, bell pepper, and garlic until softened.",
          "2. Add beans, diced tomatoes, chili powder, and cumin.",
          "3. Season with salt and pepper.",
          "4. Simmer for 30 minutes, stirring occasionally."
        ],
        "dietary": ["vegetarian", "gluten-free"],
       "image": "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D"
          },
      {
        "name": "Oatmeal with Banana and Almonds",
        "category": "Breakfast",
        "cooking_time": "10 minutes",
        "ingredients": [
          "1 cup oats",
          "2 cups milk or plant-based milk",
          "1 banana, sliced",
          "2 tbsp almonds, chopped",
          "1 tbsp honey or maple syrup"
        ],
        "instructions": [
          "1. In a pot, bring milk to a boil.",
          "2. Add oats and reduce heat to a simmer.",
          "3. Cook for 5-7 minutes until oats are soft.",
          "4. Top with banana slices, almonds, and honey or maple syrup."
        ],
        "dietary": ["vegetarian", "gluten-free if using gluten-free oats"],
       "image": "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D"
           },
      {
        "name": "Sweet Potato Fries",
        "category": "Side Dish",
        "cooking_time": "30 minutes",
        "ingredients": [
          "2 large sweet potatoes",
          "2 tbsp olive oil",
          "1 tsp paprika",
          "1/2 tsp garlic powder",
          "Salt and pepper to taste"
        ],
        "instructions": [
          "1. Preheat oven to 425°F (220°C).",
          "2. Peel and cut sweet potatoes into fries.",
          "3. Toss with olive oil, paprika, garlic powder, salt, and pepper.",
          "4. Spread on a baking sheet and bake for 25-30 minutes, flipping halfway through."
        ],
        "dietary": ["vegetarian", "gluten-free"],
       "image": "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D"
           },
      {
        "name": "Chickpea Salad",
        "category": "Salad",
        "cooking_time": "15 minutes",
        "ingredients": [
          "1 can chickpeas, drained and rinsed",
          "1 cucumber, diced",
          "1 bell pepper, diced",
          "1/4 cup red onion, chopped",
          "2 tbsp olive oil",
          "1 tbsp red wine vinegar",
          "Salt and pepper to taste"
        ],
        "instructions": [
          "1. In a large bowl, combine chickpeas, cucumber, bell pepper, and red onion.",
          "2. Drizzle with olive oil and red wine vinegar.",
          "3. Season with salt and pepper.",
          "4. Toss to combine and serve."
        ],
        "dietary": ["vegetarian", "gluten-free"],
        "image": "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D"
        }
  
];

mongoose.connect('mongodb+srv://abhishek3011patil:Abhi1289@cluster0.w1zwk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const addRecipes = async () => {
  try {
    // Clear existing recipes
    await Recipe.deleteMany({});
    console.log('Existing recipes cleared.');

    // Add new recipes
    await Recipe.insertMany(recipes);
    console.log('Recipes added successfully.');
  } catch (error) {
    console.error('Error adding recipes:', error);
  } finally {
    mongoose.connection.close();
  }
};

addRecipes();
