// import "./App.css";

import { Routes, Route } from "react-router";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import GameCreate from "./components/game-create/GameCreate";
import GameCatalog from "./components/game-catalog/GameCatalog";
import GameDetails from "./components/game-details/GameDetails";
import GameEdit from "./components/game-edit/GameEdit";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  const userLoginHandler = (email) => {
    setEmail(email);
  };
  return (
    <div id="box">
      <Header></Header>
      <main id="main-content">
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/games" element={<GameCatalog></GameCatalog>}></Route>
          <Route
            path="/games/create"
            element={<GameCreate></GameCreate>}
          ></Route>
          <Route
            path="/games/:gameId/details"
            element={<GameDetails email={email}></GameDetails>}
          ></Route>
          <Route
            path="/games/:gameId/edit"
            element={<GameEdit></GameEdit>}
          ></Route>
          <Route
            path="/login"
            element={<Login onLogin={userLoginHandler}></Login>}
          ></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
