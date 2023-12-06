import React from "react";
import searchLogo from "../../../assest/searchlogo.svg";
import "./SearchBar.css";
import SearchBarCard from "./SearchBarCard";
import { useNavigate } from "react-router-dom";

export default function SearchBar({
  data,
  searchInputValue,
  setSearchInputValue,
  setAlbumPage,
}) {
  const navigate = useNavigate();

  const filterSearchInputValue = (data) => {
    if (searchInputValue?.length > 0) {
      let filteredData = data?.filter((item) =>
        item.title.toLowerCase().includes(`${searchInputValue.toLowerCase()}`)
      );
      return filteredData;
    }
  };

  const displayFilterSearchInputValue = filterSearchInputValue(data);

  const handleSearchInputValueChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearchBarNavigate = () => {
    if (searchInputValue === "") {
      alert("Search a album of your choice");
    } else if (
      searchInputValue?.toLowerCase() ===
      displayFilterSearchInputValue[0]?.title?.toLowerCase()
    ) {
      setAlbumPage(displayFilterSearchInputValue[0]);
      navigate(`/${displayFilterSearchInputValue[0].slug}`);
      setSearchInputValue("");
    }
  };
  return (
    <>
      <div className="searchbar-main-container">
        <div className="searchbar-container">
          <input
            type="text"
            placeholder="Search a album of your choice"
            className="searchbar-input"
            value={searchInputValue}
            onChange={handleSearchInputValueChange}
          />
          <button className="searchbar-logo" onClick={handleSearchBarNavigate}>
            <img src={searchLogo} alt="searchLogo" />
          </button>
        </div>
        {searchInputValue ? (
          <div className="searchbar-filter-container">
            {displayFilterSearchInputValue?.map((item, index) => {
              return (
                <SearchBarCard
                  data={item}
                  key={index}
                  setSearchInputValue={setSearchInputValue}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
