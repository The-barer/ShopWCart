import { BasketItem } from "./BasketItem";
export const BasketList = (props) => {
  const {
    order = [],
    hadleBasketShow = Function.prototype,
    removeFromCart = Function.prototype,
    increseOrderItem = Function.prototype,
    decreaseOrderItem = Function.prototype,
  } = props;
  const totalPrice = order.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>
        {order.length ? (
          order.map((item, index) => (
            <BasketItem
              key={item.id}
              {...item}
              index={index}
              removeFromCart={removeFromCart}
              increseOrderItem={increseOrderItem}
              decreaseOrderItem={decreaseOrderItem}
            />
          ))
        ) : (
          <li className="collection-item">Корзина пуста</li>
        )}
        <li className="collection-item active">
          Общая стоимость: {totalPrice}
          {" руб."}
        </li>
        <i className="material-icons basket-close" onClick={hadleBasketShow}>
          close
        </i>
        <button className="btn btn-buy darken-1">Купить</button>
      </ul>
    </>
  );
};
