export const Cart = (props) => {
  const { quantity = 0, hadleBasketShow = Function.prototype } = props;
  return (
    <div className="cart green darken-1" onClick={hadleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};
