import { MdSearch } from "react-icons/md";
import React from "react";
import data from "../assets/data.json";

//Searchbar Component to filter results that includes the searched words in description.
const Searchbar = ({ setFilteredData }) => {
  const handleSearch = (e) => {
    let filtered = data.posts.filter((post) =>
      post.description.includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <div className="items-center w-9/12 flex flex-row ">
      <span className="relative left-8 cursor-pointer">
        {" "}
        <MdSearch size={30} className="hover:border border-white" />
      </span>
      <input
        onChange={handleSearch}
        className="h-10 border border-gray-300 rounded-lg bg-white pl-10 outline-0	"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Searchbar;
