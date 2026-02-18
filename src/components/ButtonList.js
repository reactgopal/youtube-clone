import React from "react";
import Buttons from "./Buttons";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Cooking",
  "Sports",
  "News",
  "Comedy",
  "Movies",
  "Technology",
  "Education",
  "Travel",
  "Fashion",
  "Beauty",
  "Health",
  "Fitness",
  "Food",
  "DIY",
  "Art",
  "Photography",
  "Science",
  "History",
  "Business",
  "Finance",
  "Motivation",
  "Inspiration",
];

const ButtonList = () => {
  return (
    <div className="w-full flex overflow-x-auto">
      {list.map((item, index) => {
        return <Buttons key={index} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
