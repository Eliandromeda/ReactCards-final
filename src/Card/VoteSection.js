import IconButton from "./IconButton";
import thumbUp from '../../src/assets/img/thumbs-up.svg';
import thumbDown from '../../src/assets/img/thumbs-down.svg';

const VoteSection = () => {
  return (
    <div className="opinion-card__votes">
      <IconButton
        src={thumbUp}
        classButton="icon-button__vote-up"
        ariaButton="thumbs up"
        altImg="thumbs up"
      />
      <IconButton
        src={thumbDown}
        classButton="icon-button__vote-down"
        ariaButton="thumbs down"
        altImg="thumbs down"
      />
      <button className="opinion-card__votes__vote">Vote Now</button>
    </div>
  );
};

export default VoteSection;
