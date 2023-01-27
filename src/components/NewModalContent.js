export default function NewModalContent({ onClose }) {
  return (
    <div onClick={onClose} className="new-wrapper">
      <div onClick={(e) => e.stopPropagation()} className="new-content">
        I am the modal
      </div>
    </div>
  );
}
