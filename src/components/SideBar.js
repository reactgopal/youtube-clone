import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  // if(!true) return null  //false return null
  // if(!false) return null  //true return jsx
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-2">subscription</h1>
      <ul>
        <li>sport</li>
        <li>music</li>
        <li>movie</li>
      </ul>
      <h1 className="font-bold  pt-2">watch later</h1>
      <ul>
        <li>sport</li>
        <li>music</li>
        <li>movie</li>
      </ul>
    </div>
  );
};

export default SideBar;
