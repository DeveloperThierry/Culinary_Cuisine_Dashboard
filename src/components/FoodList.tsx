import type { FoodListProps } from "../types/recipe";
import FoodItem from "./FoodItem";
import data from "../data.json";

const FoodList = ({ foodData, setFoodId }: FoodListProps) => {
  return (
    <div className="overflow-hidden">
      {" "}
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
};
export default FoodList;
