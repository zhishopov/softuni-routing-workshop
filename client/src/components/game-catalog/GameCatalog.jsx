import { useEffect, useState } from "react";
import gameService from "../../services/gameService";
import GameCatalogItem from "./game-catalog-item/GameCatalogItem";

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
          <GameCatalogItem key={game._id} {...game}></GameCatalogItem>
        ))}

        {/* Display paragraph: If there is no games  */}
        <h3 className="no-articles">No articles yet</h3>
      </section>
    </>
  );
}
