import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../config";
import { Cart } from "./Cart";
import { GoodsList } from "./GoodsList";
import { Preloader } from "./Preloader";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  const addToCart = (item) => {
    const newItem = { ...item, orderCount: 1 };
    const alreadyInList = order.findIndex((orderItem) => {
      return orderItem.id === item.id;
    });
    if (alreadyInList < 0) {
      setOrder([...order, newItem]);
    } else {
      order[alreadyInList].orderCount++;
    }
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

  // useEffect(() => {
  // updateGoods()
  // ,[]}

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      <button onClick={updateGoods} className="btn">
        Get items
      </button>
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
    </main>
  );
}
