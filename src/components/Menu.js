import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = ({ menuInfo, basket, setBasket }) => {
  const handleOnClick = () => {
    const newBasket = [...basket];
    let newItem = true;
    console.log(menuInfo.id);
    newBasket.forEach((item) => {
      if (item.article.id === menuInfo.id) {
        item.quantity++;
        newItem = false;
      }
    });
    newItem && newBasket.push({ article: menuInfo, quantity: 1 });
    setBasket(newBasket);
  };

  return (
    <div className="Menu" onClick={handleOnClick}>
      <div className="Menu-info">
        <h3>{menuInfo.title}</h3>
        {menuInfo.description && <p>{menuInfo.description}</p>}
        <div className="Menu-notation">
          <span>{menuInfo.price} €</span>
          <strong>
            {menuInfo.popular && (
              <FontAwesomeIcon icon="star" className="icon" />
            )}
            {menuInfo.popular && "Popular"}
          </strong>
        </div>
      </div>
      {menuInfo.picture && (
        <div className="Menu-picture">
          <img src={menuInfo.picture} alt="meal" />
        </div>
      )}
    </div>
  );
};

export default Menu;
