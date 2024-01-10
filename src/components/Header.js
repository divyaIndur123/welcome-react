import { useState } from "react";
import { LOGO_URL } from "../utils/contants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleLogin = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  return (
    <div className="header">
      <img src={LOGO_URL} className="logo"></img>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button onClick={handleLogin}>{btnName}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
