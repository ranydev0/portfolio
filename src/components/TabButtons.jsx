import Button from "./Button.jsx";

function TabButtons({ labels, handleClick, activeLabel }) {
  return (
    <div className="tab-buttons">
      {labels.map((label) => (
        <Button
          key={label}
          handleClick={() => handleClick(label)}
          clicked={label === activeLabel}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}

export default TabButtons;
