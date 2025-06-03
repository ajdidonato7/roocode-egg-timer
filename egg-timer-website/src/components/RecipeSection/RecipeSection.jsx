import React from 'react';
import './RecipeSection.css';
import RecipeList from './RecipeList/RecipeList';
import recipes from '../../data/recipes';

const RecipeSection = () => {
  return (
    <section id="recipes" className="recipe-section">
      <h2>Egg Recipes</h2>
      <p className="recipe-intro">
        Discover delicious egg recipes to try after your perfectly timed eggs are ready.
        Click on a recipe card to view ingredients and preparation steps.
      </p>
      <RecipeList recipes={recipes} />
    </section>
  );
};

export default RecipeSection;