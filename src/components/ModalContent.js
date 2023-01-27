export default function ModalContent({ onClose }) {
  return (
    <div onClick={onClose} className="modal-wrapper">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <h1>I'm a modal dialog</h1>
      </div>
    </div>
  );
}
