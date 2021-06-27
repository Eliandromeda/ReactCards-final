import "../Card/IconButton.css";

const ThumbsButton = (props) => {
  const CLASSES = {
    iconButton: `icon-button ${props.classButton}`,
  };

  return (
    <button className={CLASSES.iconButton} aria-label={props.ariaButton}>
      <img src={props.src} alt={props.altImg} />
    </button>
  );
};

export default ThumbsButton;
