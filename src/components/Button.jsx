function Button({ children, handleClick, clicked }) {
  return (
    <button
      onClick={handleClick}
      className={clicked ? "btn-filled" : "btn-outlined"}
    >
      {children}
    </button>
  );
}

export default Button;
