import Card from "./components/Card/Card";
import cardsData from "./data/cardsData.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ul className="cards-list">
          {cardsData.cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              address={card.address}
              distance={card.distance}
              metro={card.metro}
              rating={card.rating}
              category={card.category}
              image={card.image}
              link={card.link}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
