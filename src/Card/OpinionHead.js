import IconButton from './IconButton';
import thumbUp from '../../src/assets/img/thumbs-up.svg';
import thumbDown from '../../src/assets/img/thumbs-down.svg';

const OptionHead = (props) => {
  return (
  <div className="opinion-card__description">
     <div className="opinion-card__name">
      <IconButton
        src={thumbUp}
        classButton="positive"
        ariaButton="thumbs up"
        altImg="thumbs up"
      />
      <IconButton
        src={thumbDown}
        classButton="negative"
        ariaButton="thumbs down"
        altImg="thumbs down"
      />
      <h3>{props.card.name}</h3>
    </div>
    <p className="opinion-card__description-text">
      {props.card.description}
    </p>
    <p className="opinion-card__eyebrow"></p>
  </div>
  )
}

export default OptionHead;