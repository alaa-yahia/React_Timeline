import "../App.scss";

export const Modal = ({ isModalShown, onRequestClose, classes, children }) => {
  return isModalShown ? (
    <div className={classes} onClick={onRequestClose}>
      <div
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
