import type { FoodItemProps } from "../types/recipe";

const FoodItem = ({ food, setFoodId }: FoodItemProps) => {
  return (
    <div className="mb-8 max-w-2xl shadow-2xl border rounded-xl">
      {/* <div className="mb-8 max-w-xs shadow-2xl border rounded-xl"> */}
      <img src={food.image} className="w-full rounded-t-xl object-cover" />
      <div className="bg-white rounded-b-xl p-4">
        <h1 className="my-2 text-4xl font-bold tracking-tight text-red-900">
          {food.title}
        </h1>
        <button
          onClick={() => setFoodId(food.id)}
          className="my-2 inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
