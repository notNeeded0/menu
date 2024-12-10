import "./App.css";
import menuImg1 from "./images/menu1.png";
import menuImg2 from "./images/menu2.png";

function App() {
  return (
    <div className="menu--container">
      <img className="menuImg" src={menuImg1} alt="menu" />
      <img className="menuImg" src={menuImg2} alt="menu" />
    </div>
  );
}

export default App;
