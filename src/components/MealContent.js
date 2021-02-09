import Menu from "./Menu";

const MealContent = ({ categoryInfo }) => {
  return (
    <div className="Meal-content">
      <h2>{categoryInfo.name}</h2>
      <div className="Meal-content-menus">
        {categoryInfo.meals.map((item) => {
          return <Menu className="Menus" menuInfo={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default MealContent;
