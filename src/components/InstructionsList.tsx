import { FoodPropsWrapper } from "../types/recipe";

const InstructionsList = ({ food }: FoodPropsWrapper) => {
  return (
    <div>
      <ol className="list-none px-12 text-lg text-stone-500 gap-4 flex flex-col">
        {food.analyzedInstructions[0].steps.map((instruction) => (
          <li key={instruction.number}>
            {instruction.number + ". " + instruction.step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InstructionsList;
