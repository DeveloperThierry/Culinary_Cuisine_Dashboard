import React from "react";
import { FoodPropsWrapper } from "../types/recipe";

const ItemList = ({food}: FoodPropsWrapper) => {
  return (
    <div className="list-none px-12 text-lg text-stone-500 gap-4 flex flex-wrap ">
      {food.extendedIngredients.map((item) => (
        <div key={item.id}>
          <img
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt={`image of ${item.name}`}
          />
          <li key={item.id}>
            {item.amount + " " + item.unit + " " + item.name}
          </li>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
