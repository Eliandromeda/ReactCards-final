import ThumbButton from "../Card/ThumbButton";
import "../Card/NameSection.css";

const NameSection = (props) => {
  const iconsRoute = {
    thumbUp: '/assets/img/thumbs-up.svg',
    thumbDown: '/assets/img/thumbs-down.svg '
  }

  return (
    <div className="opinion-card__name">
      <ThumbButton
        src={iconsRoute.thumbUp}
        typeThumb="positive"
        ariaButton="thumbs up"
        altImg="thumbs up"
      />
      <ThumbButton
        src={iconsRoute.thumbUp}
        typeThumb="negative"
        ariaButton="thumbs down"
        altImg="thumbs down"
      />
      <h3>{props.name}</h3>
    </div>
  );
};

export default NameSection;
