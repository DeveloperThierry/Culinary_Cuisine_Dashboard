import React, { useEffect, useState } from "react";
import { FoodIdProp } from "../types/recipe";
import data from "../data.json";
import Loader from "./Loader";
import TinyIcon from "./TinyIcon";
import ItemList from "./ItemList";
import InstructionsList from "./InstructionsList";

const apiKey = import.meta.env.VITE_APIKEY;

const FoodDetails = ({ foodId }: FoodIdProp) => {
  const [food, setFood] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  // const [food, setFood] = useState([]);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  useEffect(() => {
    async function fetchFood() {
      setIsLoading(true);
      const res = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-white p-4 text-lg rounded-xl shadow-xl">
          <div className="my-8 flex flex-col items-center justify-center gap-8 p-4">
            <h1 className="text-5xl p-2 text-center font-extrabold text-red-900 leading-none tracking-tight">
              {food.title}
            </h1>
            <img
              src={food.image}
              className="rounded-lg outline outline-white w-128 h-128 object-cover"
            />
            <div className="flex flex-row justify-center text-xs">
              <TinyIcon
                color={"purple"}
                text={`${food.readyInMinutes} minutes`}
              />
              <TinyIcon color={"sky"} text={`Servings ${food.servings}`} />
              <TinyIcon
                color={"red"}
                text={`Price $${((food.pricePerServing / 100) * 8).toFixed(2)}`}
              />
              {food.vegetarian ? (
                <TinyIcon color={"orange"} text={`Vegetarian`} />
              ) : (
                ""
              )}
              {food.vegan ? <TinyIcon color={"orange"} text={`Vegan`} /> : ""}
              {food.glutenFree ? (
                <TinyIcon color={"orange"} text={`Gluten Free`} />
              ) : (
                ""
              )}
            </div>
            <div>
              <h1 className="font-bold text-2xl text-center mb-4">
                Ingredients
              </h1>
              <ItemList food={food} />
            </div>

            <div>
              <h1 className="font-bold text-2xl text-center mb-4">
                Instructions
              </h1>
              <InstructionsList food={food} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
