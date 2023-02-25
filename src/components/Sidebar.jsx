import React, { useState } from "react";
import Searchbar from "./Searchbar";
import { RxCross1 } from "react-icons/rx";
import {
  MdHome,
  MdSearch,
  MdExplore,
  MdMovie,
  MdSend,
  MdFavoriteBorder,
  MdAddBox,
  MdAccountCircle,
} from "react-icons/md";

const data = [
  {
    title: "Home",
    icon: <MdHome size={30} />,
  },
  {
    title: "Search",
    icon: <MdSearch size={30} />,
  },
  {
    title: "Explore",
    icon: <MdExplore size={30} />,
  },
  {
    title: "Reels",
    icon: <MdMovie size={30} />,
  },
  {
    title: "Messages",
    icon: <MdSend size={30} />,
  },
  {
    title: "Notifications",
    icon: <MdFavoriteBorder size={30} />,
  },
  {
    title: "Create",
    icon: <MdAddBox size={30} />,
  },
  {
    title: "Profile",
    icon: <MdAccountCircle size={30} />,
  },
];

const Sidebar = ({ innerWidth, filteredData, setFilteredData }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const handleSearch = (title) => {
    if (title === "Search") {
      setSearchActive(true);
    } else {
      return;
    }
  };
  return (
    <div
      className={`w-2/12 h-screen border ${
        innerWidth < 600 ? "none border-transparent" : "fixed border-grey-100"
      }`}>
      <div className="py-12 px-4">
        <img
          className="w-40"
          src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.svg"
          alt=""
        />
      </div>
      <div>
        {data &&
          data.map((item, index) =>
            item.title === "Search" && searchActive ? (
              <div
                key={"1000"}
                className="flex flex-row items-center justify-between">
                <Searchbar
                  filteredData={filteredData}
                  setFilteredData={setFilteredData}
                />
                <RxCross1
                  className=""
                  onClick={() => {
                    setSearchActive(!searchActive);
                  }}
                />
              </div>
            ) : (
              <div
                key={index}
                onClick={() => handleSearch(item.title)}
                className="w-full  flex px-4 items-center py-4">
                <span> {item.icon}</span>{" "}
                {innerWidth > 800 && (
                  <span className="ml-2 lg:ml-4">{item.title}</span>
                )}
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Sidebar;
