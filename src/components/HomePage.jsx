import { useEffect, useState } from "react";
import YugiohCard from "./Home/YugiohCard";

function HomePage({ setLogin }) {
  const [cards, setCards] = useState([]);
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;
  // Calculate the cards to display based on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Fetch the data from the Yugioh API
  useEffect(() => {
    if (!data) {
      fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes")
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(json => setData(json))
        .catch(error => console.log(error));
    }
    console.log(data);
    printYugiohCards();
  }, [data]);

  // spawn a YugiohCard component with the card name from the search bar
  function spawnYugiohCard(cardData) {
    setCards(prevCards => [...prevCards, <YugiohCard data={cardData} key={cardData.id} />]);
  }

  // Print all Yugioh cards to the screen
  function printYugiohCards() {
    setCards([]);
    console.log("Printing cards");
    // Check if the data is available
    if (data && data.data) {
      data.data.forEach(card => {
        spawnYugiohCard(card);
      });
    } else {
      console.log("No data available");
    }
  }

  // Search for a Yugioh card based on the search bar
  function searchYugiohCard() {
    const search = document.getElementById("search").value;
    console.log(search);
    setCards([]);
    if (search) {
      data.data.forEach(card => {
        if (card.name.toLowerCase().includes(search.toLowerCase())) {
          spawnYugiohCard(card);
        }
      });
    }
    else {
      printYugiohCards();
    }
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setLogin(false)}>Log Out</button>
      <input type="text" id="search" placeholder="Search for a card" />
      <button onClick={searchYugiohCard}>Search</button>
      {currentCards.length > 0 && (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {currentCards}
        </div>
      )}
      <div>
        {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HomePage;