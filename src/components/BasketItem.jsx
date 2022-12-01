export const BasketItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    index,
    removeFromCart = Function.prototype,
    increseOrderItem = Function.prototype,
    decreaseOrderItem = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {index + 1}
      {". "}
      {name}
      {": "}
      <span className="item-quantity" onClick={() => decreaseOrderItem(id)}>
        -
      </span>
      {quantity + " шт"}
      <span className="item-quantity" onClick={() => increseOrderItem(id)}>
        +
      </span>
      {" =  "} {price * quantity} {" руб."}
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
