import VoteSection from "./VoteSection";
import OptionHead from "./OpinionHead";
import Gauge from "./Gauge";
import Card from './Card';

const OpinionCard = (props) => {
  return (
    <Card background={props.card.picture}>
        <OptionHead card={props.card}/>
        <VoteSection />
        <Gauge />
    </Card>
  );
};

export default OpinionCard;
