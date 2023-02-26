import { MdFavoriteBorder } from "react-icons/md";
import React from "react";
import Searchbar from "./Searchbar";
//Navbar Component to be rendered conditionally when screen size is smaller than 480px
const Navbar = ({ filteredData, setFilteredData }) => {
  return (
    <div className="w-full sticky top-0 bg-white py-3  flex items-center justify-around">
      <div className="w-16 pl-1">
        <img
          src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.svg"
          alt="Instagram"
        />
      </div>
      <Searchbar
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <div>
        <MdFavoriteBorder
          size={30}
          className="hover:border border-white cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
