import { useSelector } from "react-redux";

export function Header() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="header">
      <div className="cart-div">
        <span>{cart.length}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt="cart"
        />
      </div>
    </div>
  );
}
