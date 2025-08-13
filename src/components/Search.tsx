import { useEffect, useState } from "react";
import type { SearchProps } from "../types/recipe";

const URL = "https://api.spoonacular.com/recipes/complexSearch?";
const apiKey = import.meta.env.VITE_APIKEY;

const Search = ({ setFoodData }: SearchProps) => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      setFoodData(data.results);
      console.log(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className="flex justify-center items-center">
      <div className="flex bg-white rounded-full w-full px-4 py-8 shadow text-2xl my-4">
        <i className="fa-solid fa-magnifying-glass mx-2 justify-center items-center"></i>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-2 bg-transparent border-none outline-none w-full"
        />
      </div>
    </div>
  );
};
export default Search;
