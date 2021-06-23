import ThumbButton from "./ThumbButton";

const VoteSection = () => {
  const iconsRoute = {
    thumbUp: '/assets/img/thumbs-up.svg',
    thumbDown: '/assets/img/thumbs-down.svg '
  }
  return (
    <div className="opinion-card__votes">
      <ThumbButton
        src={iconsRoute.thumbUp}
        typeThumb="icon-button__vote-up"
        ariaButton="thumbs up"
        altImg="thumbs up"
      />
      <ThumbButton
        src={iconsRoute.thumbDown}
        typeThumb="icon-button__vote-down"
        ariaButton="thumbs down"
        altImg="thumbs down"
      />
      <button className="opinion-card__votes__vote">Vote Now</button>
    </div>
  );
};

export default VoteSection;
