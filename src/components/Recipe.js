import { useState } from "react";
import "../styles/recipe.css";

const blackTeaRecipe = {
  tealeaf: "1tsp",
  sugar: "2tps",
  boilingTime: "10minutes",
};

const milkTeaRecipe = {
  ...blackTeaRecipe,
  tealeaf: "2tps",
  sugar: "1.5tsp",
  milk: "0.25cup",
};

console.log(blackTeaRecipe);
console.log(milkTeaRecipe);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div className="recipe">
      <h3>Current recipe:</h3>
      <button onClick={() => setRecipe(blackTeaRecipe)}>Black Tea</button>
      <button id="last-btn" onClick={() => setRecipe(milkTeaRecipe)}>
        Milk Tea
      </button>
      <ul className="recipe-items">
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
