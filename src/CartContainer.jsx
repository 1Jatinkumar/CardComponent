import CartItem from "./CartItem";
import { CLEAR_CART } from "./actions";
import useGlobalContext from "./globalContext";

const CartContainer = () => {
  const { state, dispatch } = useGlobalContext();

  let price = 0;
  state.cartMap.forEach((values, keys) => {
    price = price + parseInt(values.price) * values.amount;
  });

  if (state.cartMap.size === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {Array.from(state.cartMap).map(([key, values]) => {
          return <CartItem key={key} {...values} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${price}</span>
          </h5>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => {
            dispatch({ type: CLEAR_CART });
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
