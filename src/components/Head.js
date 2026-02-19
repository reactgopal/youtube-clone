import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getListOfSearchResults(), 200);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getListOfSearchResults = async () => {
    console.log(searchQuery);
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);

    console.log(response, "response");
    const json = await response.json();
    setSearchResults(json.items);
    console.log(json.items);
  };

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
        <div>
          <input
            className="w-[37rem] border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchResults(true)}
            onBlur={() => setShowSearchResults(false)}
          />
          <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        {showSearchResults && (
          <div className="absolute  bg-white w-[37rem] rounded-lg shadow-lg border border-gray-200 z-50">
            <ul className="max-h-80 overflow-y-auto">
              {searchResults.map((result) => (
                <li
                  key={result.id.videoId}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={() => setSearchQuery(result.snippet.title)}
                >
                  <span className="text-gray-500">🔍</span>
                  <span className="line-clamp-1">{result?.snippet?.title}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
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
