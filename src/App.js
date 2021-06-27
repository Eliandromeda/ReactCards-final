import './Card/Content.css';
import OpinionCard from './Card/OpinionCard'
import cards from './data/data.json'

function App() {
  const cardsData = cards.data;

  return (
   <div className="opinion-card">
      <OpinionCard card={cardsData[0]} />
      <OpinionCard card={cardsData[1]} />
      <OpinionCard card={cardsData[2]} />
      <OpinionCard card={cardsData[3]} />
      <OpinionCard card={cardsData[4]} />
      <OpinionCard card={cardsData[5]} />
   </div>
  );
}

export default App;
