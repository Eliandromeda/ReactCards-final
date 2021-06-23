
import thumbsUp from '../assets/img/thumbs-up.svg';
import thumbsDown from '../assets/img/thumbs-down.svg';

const Gauge = () => {
  return(
  <div className="opinion-card__gauge">
    <div className="opinion-card__gauge__thumbs-up">
      <img src={thumbsUp} alt="thumps up" />
      <label className="opinion-card__gauge__percentage">70%</label>
    </div>
    <div className="opinion-card__gauge__thumbs-down">
      <label className="opinion-card__gauge__percentage">30%</label>
      <img src={thumbsDown} alt="thumps down"/>
    </div>
  </div>
  );
}

export default Gauge;
