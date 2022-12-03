import { useContext, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Cart } from "./Cart";
import { GoodsList } from "./GoodsList";
import { Preloader } from "./Preloader";
import { BasketList } from "./BasketList";
import { ShopContext } from "../Context";

export default function Shop() {
    const { setGoods, loading, isBasketShow } = useContext(ShopContext);

    const updateGoods = () => {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured);
            })
            .catch((err) => console.error(err));
    };

    useEffect(() => updateGoods(), 
    //eslint-disable-next-line
     []);

    return (
        <main className="container content">
            <Cart />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketShow && <BasketList />}
        </main>
    );
}
