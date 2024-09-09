'use client'
import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard/RecipeCard'; // Ensure this import path is correct

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilters, setDietaryFilters] = useState({ vegetarian: false, glutenFree: false });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Form state
  const [form, setForm] = useState({
    name: '',
    category: '',
    ingredients: '',
    instructions: '',
    cooking_time: '',
    dietary: [],
    image: ''
  });

  

  // Fetch recipes from server
  useEffect(() => {
    fetch('http://localhost:5000/api/recipes') // Fetch from your Express server
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setRecipes(data || []); // Ensure recipes is set to an empty array if not present
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Update filtered recipes based on search and filters
  useEffect(() => {
    let results = recipes;
    
    // Search functionality
    if (searchQuery) {
      results = results.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some(ingredient =>
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Dietary filters
    if (dietaryFilters.vegetarian) {
      results = results.filter(recipe => recipe.dietary.includes('vegetarian'));
    }
    if (dietaryFilters.glutenFree) {
      results = results.filter(recipe => recipe.dietary.includes('gluten-free'));
    }

    setFilteredRecipes(results);
  }, [searchQuery, dietaryFilters, recipes]);

  // Handle form field changes
  const handleFormChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === 'checkbox') {
      setForm(prevForm => ({
        ...prevForm,
        dietary: checked
          ? [...prevForm.dietary, name]
          : prevForm.dietary.filter(d => d !== name)
      }));
    } else {
      setForm(prevForm => ({
        ...prevForm,
        [name]: value
      }));
    }
  };

  // Handle form submission to add a new recipe
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(response => response.json())
    .then(data => {
      setRecipes(prevRecipes => [...prevRecipes, data]);
      setForm({
        name: '',
        category: '',
        ingredients: '',
        instructions: '',
        cooking_time: '',
        dietary: [],
        image: ''
      });
    })
    .catch(error => console.error('Error adding recipe:', error));
  };

  // Handle delete recipe
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/recipes/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      // Refresh or update the list of recipes
      setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe._id !== id));
    })
    .catch(error => console.error('Error deleting recipe:', error));
  };

  // Handle search input change
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  // Handle dietary filter changes
  const handleDietaryFilterChange = (e) => {
    setDietaryFilters({
      ...dietaryFilters,
      [e.target.name]: e.target.checked
    });
  };

  if (loading) return <div className="text-center text-gray-900">Loading...</div>;
  if (error) return <div className="text-center text-red-600">Error: {error.message}</div>;

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto">
       
       
        
        {/* Recipe Form */}
        <div className="mb-6 flex justify-center ">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-yellow-900 mb-4 text-center ">Add a New Recipe</h2>
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md text-cream-500">
              <div className="mb-4">
                <label className="block text-gray-700  font-bold
                 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  className="border border-gray-300 rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2">Category</label>
                <input
                  type="text"
                  name="category"
                  value={form.category}
                  onChange={handleFormChange}
                  className="border border-gray-300 rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold text mb-2">Ingredients (comma separated)</label>
                <input
                  type="text"
                  name="ingredients"
                  value={form.ingredients}
                  onChange={handleFormChange}
                  className="border  border-gray-300 rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2">Instructions (comma separated)</label>
                <input
                  type="text"
                  name="instructions"
                  value={form.instructions}
                  onChange={handleFormChange}
                  className="border border-gray-300 rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2">Cooking Time</label>
                <input
                  type="text"
                  name="cooking_time"
                  value={form.cooking_time}
                  onChange={handleFormChange}
                  className="border border-gray-300 rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2">Dietary (select multiple)</label>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="vegetarian"
                    checked={form.dietary.includes('vegetarian')}
                    onChange={handleFormChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Vegetarian</span>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="gluten-free"
                    checked={form.dietary.includes('gluten-free')}
                    onChange={handleFormChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Gluten-Free</span>
                </div>
              </div>
              <div className="mb-4">
                <label className="block font-bold text-gray-700 mb-2">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={form.image}
                  onChange={handleFormChange}
                  className="border  border-gray-300 rounded p-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-green-500 text-orange-400 font-bold rounded p-2 w-full"
              >
                Add Recipe
              </button>
            </form>
          </div>
        </div>

        {/* Search and Filter UI */}
        <div className="mb-6 flex justify-center items-center">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="border  border-gray-300 rounded p-2 w-half"
          />
        </div>
        
        <div className="mb-6 flex justify-center items-center">
         <div className="file">
         <h3 className="text-lg font-semibold mb-2">Filters:</h3>
          <label className="inline-flex items-center mr-6">
            <input
              type="checkbox"
              name="vegetarian"
              checked={dietaryFilters.vegetarian}
              onChange={handleDietaryFilterChange}
              className="form-checkbox"
            />
            <span className="ml-2">Vegetarian</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="glutenFree"
              checked={dietaryFilters.glutenFree}
              onChange={handleDietaryFilterChange}
              className="form-checkbox"
            />
            <span className="ml-2">Gluten-Free</span>
          </label>
         </div>
        </div>
        
        {/* Render filtered recipes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard
              key={recipe._id} recipe={recipe} onDelete={handleDelete}
              />
            ))
          ) : (
            <div className="text-center text-gray-700">No recipes found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
