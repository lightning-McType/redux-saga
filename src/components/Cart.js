import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decQty, incQty, removeFromCart } from "../store/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const handleInc = (cartId) => {
    dispatch(incQty(cartId));
  };
  const handleDec = (cartId) => {
    dispatch(decQty(cartId));
  };
  return (
    <>
      <div className="cart-header">
        <h1>Cart</h1>
        <button className="home-btn" onClick={goHome}>
          Home page
        </button>
      </div>
      <hr />
      <div className="Gallery">
        {cart.map((item) => (
          <div key={item.id} className="row">
            <div style={{ display: "flex", justifyContent: "flexStart" }}>
              <div className="column column-left">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  width={"200"}
                  height={"200"}
                />
              </div>
              <div>
                <h2>{item.title}</h2>
                <h5>{item.description}</h5>
                <p>${item.price}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div className="quantity-buttons">
                <button onClick={() => handleInc(item.id)}>+</button>
                {item.qty}
                <button
                  onClick={() => {
                    if (item.qty) handleDec(item.id);
                    else dispatch(removeFromCart(item.id));
                  }}
                >
                  -
                </button>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="remove-item"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
