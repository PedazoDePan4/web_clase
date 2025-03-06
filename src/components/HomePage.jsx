import { useEffect, useState } from "react";
import YugiohCard from "./Home/YugiohCard";


function HomePage({ setLogin }) {
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const cardName = document.getElementById("cardName");
    cardName.addEventListener("input", () => {
      setName(cardName.value);
    });
  }, []);

  // spawn a YugiohCard component with the card name from the search bar
  function spawnYugiohCard() {
    if (!name){
      alert("Invalid card name")
    }
    else{
      setCards([...cards, <YugiohCard cardName={name} key={name} />]);
    }
  }

  return (
    <div>
      <h1>Home Page</h1>
      <input
        type="text"
        id="cardName"
        placeholder="Card Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setLogin(false)}>Log Out</button>
      <button onClick={spawnYugiohCard}>Spawn Card</button>
      {cards.length > 0 && (
        <div>
          {cards}
        </div>
      )}
    </div>
  );
}

export default HomePage;