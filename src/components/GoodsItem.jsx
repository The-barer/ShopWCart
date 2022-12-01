export const GoodsItem = (props) => {
  const { name, id, price, description, full_background } = props.item;
  const { addToCart = Function.prototype } = props;

  return (
    <div
      className="card"
      id={id}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content" style={{ flexGrow: 1 }}>
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToCart({
              id,
              price,
              name,
              description,
            })
          }
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
};
