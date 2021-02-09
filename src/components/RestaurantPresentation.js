import headerImage from "../assets/img/header-image.jpg";

const RestaurantPresentation = ({ restInfo }) => {
  return (
    <div className="Restaurant-presentation container">
      <div className="Restaurant-description">
        <h1>{restInfo.name}</h1>
        <p>{restInfo.description}</p>
      </div>
      <div className="Restaurant-image">
        <img src={headerImage} alt="table-restaurant" />
      </div>
    </div>
  );
};

export default RestaurantPresentation;
