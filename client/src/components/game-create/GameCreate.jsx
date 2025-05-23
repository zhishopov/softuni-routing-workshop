import { useNavigate } from "react-router";

import gameService from "../../services/gameService";

export default function GameCreate() {
  const navigate = useNavigate();

  const submitAction = async (formData) => {
    const gameData = Object.fromEntries(formData);

    const result = await gameService.create(gameData);
    console.log(result);
    navigate("/games");
  };

  return (
    <>
      {/* Create Page ( Only for logged-in users ) */}
      <section id="create-page" className="auth">
        <form id="create" action={submitAction}>
          <div className="container">
            <h1>Create Game</h1>
            <label htmlFor="leg-title">Legendary title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter game title..."
            />
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Enter game category..."
            />
            <label htmlFor="levels">MaxLevel:</label>
            <input
              type="number"
              id="maxLevel"
              name="maxLevel"
              min={1}
              placeholder={1}
            />
            <label htmlFor="game-img">Image:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="Upload a photo..."
            />
            <label htmlFor="summary">Summary:</label>
            <textarea name="summary" id="summary" defaultValue={""} />
            <input
              className="btn submit"
              type="submit"
              defaultValue="Create Game"
            />
          </div>
        </form>
      </section>
    </>
  );
}
