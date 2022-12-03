import { createContext, useReducer } from "react";
import reducer from "./Reducer";

const intialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertAddMsg: "",
};

export const ShopContext = createContext();

export function ContextProvider({ children }) {
    const [value, dispatch] = useReducer(reducer, intialState);

    value.removeItemOrder = (id) => {
        dispatch({ type: "REMOVE_ITEM_ORDER", payload: { id } });
    };
    value.increaseItemOrder = (id) => {
        dispatch({ type: "INCREASE_ITEM_ORDER", payload: { id } });
    };
    value.decreaseItemOrder = (itemId) => {
        dispatch({ type: "DECREASE_ITEM_ORDER", payload: { id: itemId } });
    };
    value.toggleBasket = () => {
        dispatch({ type: "TOGGLE_BASKET" });
    };
    value.setGoods = (data) => {
        dispatch({ type: "SET_GOODS", payload: data });
    };

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
