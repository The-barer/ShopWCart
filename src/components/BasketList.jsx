import { BasketItem } from "./BasketItem";
export const BasketList = (props) => {
  const {
    order = [],
    hadleBasketShow = Function.prototype,
    removeFromCart = Function.prototype,
  } = props;
  const totalPrice = order.reduce(
    (total, item) => total + item.price * item.orderCount,
    0
  );

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem key={item.id} {...item} removeFromCart={removeFromCart} />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">Общая стоимость: {totalPrice}</li>

      <i className="material-icons basket-close" onClick={hadleBasketShow}>
        close
      </i>
    </ul>
  );
};
