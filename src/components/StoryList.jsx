import React from "react";
import StoryCard from "./StoryCard";
import data from "../assets/data.json";
//component to list all stories cards 
const StoryList = ({ innerWidth }) => {
  return (
    <div
      className={`${
        innerWidth > 480 ? "mt-8" : ""
      } flex flex-row gap-4 overflow-x-scroll max-w-lg [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']`}>
      {data.stories.map((story) => (
        <StoryCard key={story.id} {...story} />
      ))}
    </div>
  );
};

export default StoryList;
