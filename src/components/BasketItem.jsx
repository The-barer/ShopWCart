import { useContext } from "react";
import { ShopContext } from "../Context";

export const BasketItem = (props) => {
    const { index, id, name, price, quantity } = props;
    const { increaseItemOrder, decreaseItemOrder, removeItemOrder } =
        useContext(ShopContext);

    return (
        <li className="collection-item">
            {index + 1}
            {". "}
            {name}
            {": "}
            <span className="item-quantity" onClick={() => decreaseItemOrder(id)}>
                -
            </span>
            {quantity + " шт"}
            <span className="item-quantity" onClick={() => increaseItemOrder(id)}>
                +
            </span>
            {" =  "} {price * quantity} {" руб."}
            <span className="secondary-content ">
                <i
                    className="material-icons basket-delete"
                    onClick={() => removeItemOrder(id)}
                >
                    close
                </i>
            </span>
        </li>
    );
};
