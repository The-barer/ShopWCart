import { useContext } from "react";
import { ShopContext } from "../Context";

export const Cart = () => {
  const {order, toggleBasket } = useContext(ShopContext)
  const  quantity = order.length

  return (
    <div className="cart green darken-1" onClick={toggleBasket}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};
