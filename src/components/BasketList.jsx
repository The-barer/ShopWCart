import { useContext } from "react";
import { ShopContext } from "../Context";
import { BasketItem } from "./BasketItem";
export const BasketList = () => {
  const {order, toggleBasket } = useContext(ShopContext)
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
              index={index}
              {...item}
            />
          ))
        ) : (
          <li className="collection-item">Корзина пуста</li>
        )}
        <li className="collection-item active">
          Общая стоимость: {totalPrice}
          {" руб."}
        </li>
        <i className="material-icons basket-close" onClick={toggleBasket}>
          close
        </i>
        <button className="btn btn-buy darken-1">Купить</button>
      </ul>
    </>
  );
};
