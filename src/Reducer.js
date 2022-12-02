export default function Reducer(state, { type, payload }) {
  function findIndexInList(id, list = []) {
    return list.findIndex((item) => item.id === id);
  }

  function removeFromOrder() {
    return {
      ...state,
      order: state.order.filter((item) => item.id !== payload.id),
    };
  }

  function addToCart() {
    const item = state.goods[findIndexInList(payload.id, state.goods)];
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    return {
      ...state,
      order: [...state.order, newItem],
    };
  }

  function increaseOrderItem() {
    const itemIndexInOrder = findIndexInList(payload.id, state.order);
    if (itemIndexInOrder < 0) {
      addToCart();
    } else {
      state.order[itemIndexInOrder].quantity++;
      return {
        ...state,
      };
    }
  }
  function decreaseOrderItem() {
    const itemIndexInOrder = findIndexInList(payload.id, state.order);
    if (itemIndexInOrder < 0) {
      return;
    } else if (state.order[itemIndexInOrder].quantity === 1) {
      removeFromOrder();
    } else {
      state.order[itemIndexInOrder].quantity--;
      return {
        ...state,
      };
    }
  }

  switch (type) {
    case "REMOVE_FROM_ORDER":
      return removeFromOrder();

    case "INCREASE_ITEM_ORDER":
      return increaseOrderItem();

    case "DECREASE_ITEM_ORDER":
      return decreaseOrderItem();

    case "BASKET_TOGGLE":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    default:
      return state;
  }
}
