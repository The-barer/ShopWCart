import { GoodsItem } from "./GoodsItem";

export const GoodsList = (props) => {
  const { goods = [],  addToCart} = props;
  if (!goods.length) {
    return <h3>Nothing hear</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem  key={item.id} item={item} addToCart={addToCart}/>
      ))}
    </div>
  );
};
