import React, { useState } from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div className={`recipe-card ${expanded ? 'expanded' : ''}`}>
      <div className="recipe-image-container">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="recipe-image" 
        />
      </div>
      
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.title}</h3>
        
        <button 
          className="recipe-toggle" 
          onClick={toggleExpanded}
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse recipe details" : "Expand recipe details"}
        >
          {expanded ? 'Hide Details' : 'Show Details'}
        </button>
        
        <div className="recipe-details">
          <div className="recipe-ingredients">
            <h4>Ingredients</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          
          <div className="recipe-steps">
            <h4>Preparation</h4>
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;