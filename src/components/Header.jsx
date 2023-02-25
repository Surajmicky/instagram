import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Header = ({ innerWidth, filteredData, setFilteredData }) => {
  return innerWidth > 480 ? (
    <Sidebar
      filteredData={filteredData}
      setFilteredData={setFilteredData}
      innerWidth={innerWidth}
    />
  ) : (
    <Navbar
      filteredData={filteredData}
      setFilteredData={setFilteredData}
      innerWidth={innerWidth}
    />
  );
};

export default Header;
