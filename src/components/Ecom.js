import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import { Cats } from "./Cats";

export default function Ecom() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cats />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
