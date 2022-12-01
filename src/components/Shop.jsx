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

  const addToCart = (item) => {
    const itemIndexInOrder = order.findIndex((orderItem) => {
      return orderItem.id === item.id;
    });
    if (itemIndexInOrder < 0) {
      const newItem = { ...item, orderCount: 1 };
      return setOrder([...order, newItem]);
    } else {
      order[itemIndexInOrder].orderCount++;
      return setOrder([...order]);
    }
  };

  const removeFromCart = (id) => {
    setOrder(order.filter((item) => item.id !== id));
  };

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
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          hadleBasketShow={hadleBasketShow}
          removeFromCart={removeFromCart}
        />
      )}
    </main>
  );
}
