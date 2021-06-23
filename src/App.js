import './Card/Content.css';
import CardsItem from './Card/CardsItem'
import cards from './data/data.json'

function App() {
  const cardsData = cards.data;

  return (
   <div className="opinion-card">
      <CardsItem card={cardsData[0]} />
      <CardsItem card={cardsData[1]} />
      <CardsItem card={cardsData[2]} />
      <CardsItem card={cardsData[3]} />
      <CardsItem card={cardsData[4]} />
      <CardsItem card={cardsData[5]} />
   </div>
  );
}

export default App;
