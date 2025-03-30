// import "./App.css";

import { Routes, Route } from "react-router";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div id="box">
      <Header></Header>
      <main id="main-content">
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
