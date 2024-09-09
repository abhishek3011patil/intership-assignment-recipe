'use client'
import React from 'react';

// Function to get a random color from a set of colors
const getRandomColor = () => {
  const colors = [
    'bg-red-100', 'bg-yellow-100', 'bg-green-100', 'bg-blue-100',
    'bg-purple-100', 'bg-pink-100', 'bg-teal-100', 'bg-gray-100'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Function to get a random block color for the image placeholder
const getRandomBlockColor = () => {
  const colors = [
    'bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500',
    'bg-purple-500', 'bg-pink-500', 'bg-teal-500', 'bg-gray-500'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const RecipeCard = ({ recipe }) => {
  if (!recipe) return null; // Handle undefined recipe

  return (
    <div className={`max-w-sm mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4 ${getRandomColor()}`}>
      <div className="p-4">
        <div
          className={`w-full h-48 flex items-center justify-center ${getRandomBlockColor()} text-white text-2xl font-bold`}
        >
          {/* Use the recipe name or a placeholder text */}
          {recipe.image ? (
            <img className="w-full h-full object-cover" src={recipe.image} alt={recipe.name} />
          ) : (
            recipe.name[0] // Display the first letter of the recipe name as placeholder
          )}
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-900">{recipe.name}</h2>
          <p className="text-gray-700 italic">{recipe.category}</p>
          <p className="text-gray-700">Cooking time: {recipe.cooking_time}</p>
          <p className="text-gray-700">Dietary: {recipe.dietary.length > 0 ? recipe.dietary.join(', ') : 'None'}</p>
          <h3 className="text-lg font-semibold mt-2">Ingredients:</h3>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mt-2">Instructions:</h3>
          <ol className="list-decimal pl-5">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="text-gray-700">{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
