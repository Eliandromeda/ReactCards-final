import "../Card/Card.css";


const Card = (props) => {
  const imageRoute = `/img/${props.background}`;

  return (
    <div
      className="opinion-card__content"
      style={{ backgroundImage: `url(${imageRoute})` }}>
      <div className="opinion-card__subcontent">{props.children}</div>
    </div>
  );
};

export default Card;
