import { useState } from "react";
import { createPortal } from "react-dom";
import NewModalContent from "./NewModalContent";

export default function NewModal() {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => setShowModal(false);
  return (
    <>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal &&
        createPortal(
          <NewModalContent onClose={onClose} />,
          document.getElementById("modal")
        )}
    </>
  );
}
