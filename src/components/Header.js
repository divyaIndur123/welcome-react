import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  console.log("useState", useState());
  const [btnName, setBtnName] = useState("Login");

  const handleLogin = () => {
    navigate("/login");
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  return (
    <div className="header">
      <img src={LOGO_URL} className="logo"></img>
      <div className="nav-items">
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
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
