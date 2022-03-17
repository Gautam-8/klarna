import "./Navbar.css";
import logo from "./Images/kalrna.png";

export const Navbar = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} className="logo" />

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <div id="burgerbtn-res">
          <button id="login-res">Log In</button>
          <label className="menu-icon" for="menu-btn">
            <span className="navicon"></span>
          </label>
        </div>

        <ul className="menu">
          <li>
            <a href="#work">Shop</a>
          </li>
          <li>
            <a href="#about">How it works</a>
          </li>
          <li>
            <a href="#careers">Pay in 4</a>
          </li>
          <li>
            <a href="#contact">The shopping app</a>
          </li>
          <li>
            <a href="#contact">Help</a>
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
