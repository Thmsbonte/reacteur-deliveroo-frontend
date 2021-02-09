import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Basket = ({ basket, setBasket }) => {
  let subTotal = 0;
  let deliveryFees = 2.5;
  return (
    <div className="Basket-section">
      <div className="Basket-content">
        <button
          style={
            basket.length > 0
              ? { backgroundColor: "#25CDBD" }
              : { backgroundColor: "#bac3c3" }
          }
        >
          Valider mon panier
        </button>

        {basket.length < 1 ? (
          <div className="Empty-basket">
            <p>Votre panier est vide</p>
          </div>
        ) : (
          <div className="Basket-articles">
            <div className="Basket-items">
              {basket.map((item) => {
                subTotal += Number(item.article.price) * Number(item.quantity);
                return (
                  <div className="Basket-item" key={item.article.id}>
                    <div className="Basket-item-info">
                      <FontAwesomeIcon
                        icon="minus"
                        className="icon"
                        size="xs"
                        onClick={() => {
                          const newBasket = [...basket];
                          newBasket.forEach((elem, index) => {
                            if (elem.article.id === item.article.id) {
                              item.quantity--;
                              if (item.quantity === 0) {
                                newBasket.splice(index, 1);
                              }
                            }
                          });
                          setBasket(newBasket);
                        }}
                      />
                      <div className="Item-counter">{item.quantity}</div>
                      <FontAwesomeIcon
                        icon="plus"
                        className="icon"
                        size="xs"
                        onClick={() => {
                          const newBasket = [...basket];
                          newBasket.forEach((elem) => {
                            if (elem.article.id === item.article.id) {
                              item.quantity++;
                            }
                          });
                          setBasket(newBasket);
                        }}
                      />
                      <p>{item.article.title}</p>
                    </div>
                    <span>
                      {item.article.price}
                      <p>{"€"}</p>
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="Basket-subtotal">
              <span>Sous-total</span> <span>{subTotal.toFixed(2)} €</span>
            </div>
            <div className="Basket-delivery-fees">
              <span>Frais de livraison</span> <span>{deliveryFees} €</span>
            </div>
            <div className="Basket-total">
              <span>Total</span>{" "}
              <span>{(subTotal + deliveryFees).toFixed(2)} €</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
