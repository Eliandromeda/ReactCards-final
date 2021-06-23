import VoteSection from "./VoteSection";
import Gauge from "./Gauge";
import NameSection from "./NameSection";
import "../Card/CardItem.css";

const CardsItem = (props) => {
  const imageRoute = `/assets/img/${props.card.picture}`;
  return (
    <div
      className="opinion-card__content"
      style={{ backgroundImage: `url(${imageRoute})` }}>
      <div className="opinion-card__subcontent">
        <div className="opinion-card__description">
          <NameSection name={props.card.name} />
          <p className="opinion-card__description-text">
            {props.card.description}
          </p>
          <p className="opinion-card__eyebrow"></p>
        </div>
        <VoteSection />
        <Gauge />
      </div>
    </div>
  );
};

export default CardsItem;
