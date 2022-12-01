import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import { Cart } from "./Cart";
import { GoodsList } from "./GoodsList";
import { Preloader } from "./Preloader";
import { BasketList } from "./BasketList";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setIsBasketShow] = useState(false);
  const hadleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  };

  function findIndexInList(id, list = []) {
    return list.findIndex((item) => item.id === id);
  }

  function addToCart(id) {
    const item = goods[findIndexInList(id, goods)];
    const newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };
    setOrder([...order, newItem]);
  }

  function removeFromCart(id) {
    setOrder(order.filter((item) => item.id !== id));
  }

  function increseOrderItem(id) {
    const itemIndexInOrder = findIndexInList(id, order);
    if (itemIndexInOrder < 0) {
      addToCart(id);
    } else {
      order[itemIndexInOrder].quantity++;
      setOrder([...order]);
    }
  }

  function decreaseOrderItem(id) {
    const itemIndexInOrder = findIndexInList(id, order);
    if (itemIndexInOrder < 0) {
      return;
    } else if (itemIndexInOrder === 1) {
      removeFromCart(id);
    } else {
      order[itemIndexInOrder].quantity--;
      setOrder([...order]);
    }
  }

  const updateGoods = () => {
    setLoading(true);

    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
      })
      .catch((err) => console.error(err))
      .finally(setLoading(false));
  };

  useEffect(() => {
    updateGoods();
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      <button onClick={updateGoods} className="btn">
        Get items
      </button>
      <Cart quantity={order.length} hadleBasketShow={hadleBasketShow} />

      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} increseOrderItem={increseOrderItem} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          hadleBasketShow={hadleBasketShow}
          increseOrderItem={increseOrderItem}
          decreaseOrderItem={decreaseOrderItem}
          removeFromCart={removeFromCart}
          
        />
      )}
    </main>
  );
}
