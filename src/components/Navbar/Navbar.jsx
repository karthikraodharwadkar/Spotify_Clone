import React from "react";
import Logo from "./Logo/Logo";
import "./Navbar.css";
import SearchBar from "./SearchBar/SearchBar";
import Feedback from "./Feedback/Feedback";

export default function Navbar({
  data,
  setIsModal,
  searchInputValue,
  setSearchInputValue,
  setAlbumPage
}) {
  return (
    <div className="navbar-container">
      <Logo />
      <SearchBar
        data={data}
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
        setAlbumPage={setAlbumPage}
      />
      <Feedback setIsModal={setIsModal} />
    </div>
  );
}
