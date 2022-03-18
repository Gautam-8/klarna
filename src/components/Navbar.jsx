import "./Navbar.css";
import logo from "./Images/kalrna.png";

export const Navbar = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} className="logo" alt="" />

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <button id="login-res">Log In</button>
        <ul className="menu">
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">How it works</a>
          </li>
          <li>
            <a href="/">Pay in 4</a>
          </li>
          <li>
            <a href="/">The shopping app</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <div id="btnlog">
            <button id="login">Log In</button>
            <button id="get">Get the App</button>
          </div>
        </ul>
      </header>
    </div>
  );
};
