import React from "react";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { Link, useNavigate } from "react-router";


const Header = () => {
  const status = useOnlineStatus();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between m-6">
      <div className="logo-container">
        <img
          className="w-36"
          src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg"
          alt=""
        />
      </div>
      <div className="status">Online Status:{status ? "🟢" : "🔴"}</div>
      <div className="navbar">
        <ul className="flex justify-between p-4 m-4">
          <Link to={"/"}>
            <li className="mx-4">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="mx-4">About</li>
          </Link>
          <Link to={"/contact"}>
            <li className="mx-4">Contact</li>
          </Link>
          <Link to={"cart"}>
            <li className="mx-4">Cart</li>
          </Link>
        </ul>
      </div>
    </div>
  )
};

export default Header;
