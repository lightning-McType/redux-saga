import ModalContent from "./ModalContent";
import { createPortal } from "react-dom";
import { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Show modal</button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.getElementById("modal")
        )}
    </>
  );
}
