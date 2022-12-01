export const BasketItem = (props) => {
  const {
    id,
    name,
    price,
    orderCount,
    removeFromCart = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {name} X {orderCount} = {price}
      <span className="secondary-content ">
        <i
          className="material-icons basket-delete"
          onClick={() => removeFromCart(id)}
        >
          close
        </i>
      </span>
    </li>
  );
};
