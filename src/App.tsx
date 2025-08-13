import "@fortawesome/fontawesome-free/css/all.min.css";
import Search from "./components/Search";
import { useState } from "react";
import FoodList from "./components/FoodList";
import type { Recipe } from "./types/recipe";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
import results from "./results.json";
function App() {
  const [foodData, setFoodData] = useState<Recipe[]>(results);
  const [foodId, setFoodId] = useState(715415);

  return (
    <div className="h-screen flex-1 bg-stone-300 h-full max-h-full">
      <div>
        <section>
          <Nav />
        </section>

        <section className="py-2 px-16 flex flex-col bg-stone-300">
          <Search foodData={foodData} setFoodData={setFoodData} />
          <Container>
            <InnerContainer>
              <FoodList foodData={foodData} setFoodId={setFoodId} />
            </InnerContainer>
            <InnerContainer>
              <FoodDetails foodId={foodId} />
            </InnerContainer>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default App;
