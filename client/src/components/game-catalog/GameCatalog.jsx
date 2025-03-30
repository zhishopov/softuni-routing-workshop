import { useEffect, useState } from "react";
import gameService from "../../services/gameService";

export default function GameCatalog() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll().then((result) => setGames(result));
  }, []);

  console.log(games);

  return (
    <>
      {/* Catalogue */}
      <section id="catalog-page">
        <h1>All Games</h1>
        {/* Display div: with information about every game (if any) */}
        {games.map((game) => (
          <div key={game.id} className="allGames">
            <div className="allGames-info">
              <img src={game.imageUrl} />
              <h6>{game.title}</h6>
              <h2>{game.category}</h2>
              <a href="#" className="details-button">
                Details
              </a>
            </div>
          </div>
        ))}

        {/* Display paragraph: If there is no games  */}
        <h3 className="no-articles">No articles yet</h3>
      </section>
    </>
  );
}
