import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, emptyCart } from "../store/cartSlice";

export function Main() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(addToCart({ name: "iPhone", brand: "Apple", price: "$500" }))
        }
      >
        Add to Cart
      </button>{" "}
      <button onClick={() => dispatch(removeFromCart())}>
        Remove from Cart
      </button>{" "}
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
    </div>
  );
}
