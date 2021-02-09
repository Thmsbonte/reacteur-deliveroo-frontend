import Basket from "./Basket";
import MealContent from "./MealContent";
import { useState } from "react";

const MainContent = ({ categoriesInfo }) => {
  const [basket, setBasket] = useState([]);
  return (
    <div className="Main-background">
      <div className="Main-content container">
        <div className="Main-content-categories">
          {categoriesInfo.map((item, index) => {
            return (
              item.meals.length > 0 && (
                <MealContent
                  categoryInfo={item}
                  key={index}
                  basket={basket}
                  setBasket={setBasket}
                />
              )
            );
          })}
        </div>

        <Basket basket={basket} setBasket={setBasket} />
      </div>
    </div>
  );
};

export default MainContent;
