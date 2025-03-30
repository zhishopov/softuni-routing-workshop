// import "./App.css";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div id="box">
      <Header></Header>
      <Home></Home>
      <Register></Register>
      <Login></Login>
    </div>
  );
}

export default App;
