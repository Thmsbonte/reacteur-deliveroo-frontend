import Basket from "./Basket";
import MealContent from "./MealContent";

const MainContent = ({ categoriesInfo }) => {
  return (
    <div className="Main-background">
      <div className="Main-content container">
        <div className="Main-content-categories">
          {categoriesInfo.map((item, index) => {
            return (
              item.meals.length > 0 && (
                <MealContent categoryInfo={item} key={index} />
              )
            );
          })}
        </div>

        <Basket />
      </div>
    </div>
  );
};

export default MainContent;
