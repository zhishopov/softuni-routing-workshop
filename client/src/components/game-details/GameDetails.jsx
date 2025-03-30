import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import gameService from "../../services/gameService";
import CommentsShow from "../comments-show/CommentsShow";
import CommentsCreate from "../comments-create/CommentsCreate";
import commentService from "../../services/commentService";

export default function GameDetails({ email }) {
  const [game, setGame] = useState({});
  const [comments, setComments] = useState([]);

  const navigate = useNavigate();
  const { gameId } = useParams();

  useEffect(() => {
    gameService.getOne(gameId).then((result) => setGame(result));

    commentService.getAll(gameId).then(setComments);
  }, [gameId]);

  const gameDeleteClickHandler = async () => {
    const hasConfirm = confirm(
      `Are you sure you want to delete ${game.title} game?`
    );

    if (!hasConfirm) {
      return;
    }

    await gameService.delete(gameId);
    navigate("/games");
  };

  const commentCreatehandler = (newComment) => {
    setComments((state) => [...state, newComment]);
  };

  return (
    <>
      {/*Details Page*/}
      <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
          <div className="game-header">
            <img className="game-img" src={game.imageUrl} />
            <h1>{game.title}</h1>
            <span className="levels">MaxLevel: {game.maxLevel}</span>
            <p className="type">{game.category}</p>
          </div>
          <p className="text">{game.summary}</p>

          <CommentsShow comments={comments}></CommentsShow>

          {/* Edit/Delete buttons ( Only for creator of this game )  */}
          <div className="buttons">
            <Link to={`/games/${gameId}/edit`} className="button">
              Edit
            </Link>
            <button onClick={gameDeleteClickHandler} className="button">
              Delete
            </button>
          </div>
        </div>
        <CommentsCreate
          onCreate={commentCreatehandler}
          email={email}
          gameId={gameId}
        ></CommentsCreate>
      </section>
    </>
  );
}
