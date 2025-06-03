import React from 'react';
import './RecipeList.css';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-list-item">
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipeList;