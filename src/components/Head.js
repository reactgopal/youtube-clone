import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(""); 
  console.log(searchQuery)
  

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex grid-cols-1">
        <img
          onClick={() => handleToggleMenu()}
          className="h-8 cursor-pointer"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCH5-in_dqv629DKigoHp7vyRZzOQrezE3w&s"
            alt="logo"
          />
        </a>
      </div>
      <div className="grid-cols-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="grid-cols-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
