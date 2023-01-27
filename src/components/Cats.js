import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "../store/catSlice";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../store/cartSlice";

export function Cats() {
  const navigate = useNavigate();
  const cats = useSelector((state) => state.cats.cats);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  const toCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <div className="header">
        <h1>CAT SPECIES GALLERY</h1>
        <p>Images of different species of cat</p>
        <div className="cart-btn">
          <button className="show-cart" onClick={toCart}>
            Show Cart
            {cart.length ? (
              <span className="cart-num">{cart.length}</span>
            ) : null}
          </button>
          <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
        </div>
      </div>
      <hr />
      <div className="Gallery">
        {cats.map((cat) => (
          <div key={cat.id} className="row">
            <div style={{ display: "flex", justifyContent: "flexStart" }}>
              <div className="column column-left">
                <img
                  src={cat.thumbnail}
                  alt={cat.title}
                  width={"200"}
                  height={"200"}
                />
              </div>
              <div>
                <h2>{cat.title}</h2>
                <h5>{cat.description}</h5>
                <p>${cat.price}</p>
              </div>
            </div>
            <div className="button-qty">
              {cart.find((item) => item.id === cat.id) ? (
                <button onClick={() => dispatch(removeFromCart(cat.id))}>
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    let newPro = { ...cat, qty: 1 };
                    dispatch(addToCart(newPro));
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <button>View more cats</button>
    </>
  );
}
