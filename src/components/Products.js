import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { Header } from "./Header";

export function Products() {
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <button
        onClick={() =>
          dispatch(addToCart({ name: "iPhone", brand: "Apple", price: "$500" }))
        }
      >
        Add to Cart
      </button>
    </div>
  );
}
