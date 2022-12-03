export default function reducer(state, { type, payload }) {
  function findIndexInList(id, list = []) {
    return list.findIndex((item) => item.id === id);
  }

  function removeItemOrder() {
    return {
      ...state,
      order: state.order.filter((item) => item.id !== payload.id),
    };
  }

  function addItemToOrder() {
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

  function decreaseItemOrder() {
    if (state.order[findIndexInList(payload.id, state.order)].quantity === 0) {
      return removeItemOrder()
    } else {
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity--
            return { ...el, quantity: newQuantity }
          } else {
            return el
          }
        })
      }
    }

  };


  function increaseItemOrder() {
    const itemIndexInOrder = findIndexInList(payload.id, state.order);

    if (itemIndexInOrder < 0) {
      return addItemToOrder();
    } else {
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === payload.id) {
            const newQuantity = item.quantity++
            return { ...item, quantity: newQuantity }
          } else {
            return item
          }
        })
      }
    };
  }

  switch (type) {
    case "REMOVE_ITEM_ORDER":
      return removeItemOrder();

    case "INCREASE_ITEM_ORDER":
      return increaseItemOrder();

    case "DECREASE_ITEM_ORDER":
      return decreaseItemOrder();

    case "TOGGLE_BASKET":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: payload,
      };

    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };

    default:
      return state;
  }
}
