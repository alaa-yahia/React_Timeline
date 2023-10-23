import "../App.css";
export const Modal = ({ isModalShown, onRequestClose, children }) => {
  return isModalShown ? (
    <div className="modal" onClick={onRequestClose}>
      <div
        className="modal-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button onClick={onRequestClose}>X</button>
        {children}
      </div>
    </div>
  ) : null;
};
