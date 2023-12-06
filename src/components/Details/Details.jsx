import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import DetailHero from "./DetailHero/DetailHero";
import Footer from "../Footer/Footer";
import Table from "./Table/Table";
import Modal from "../Navbar/Modal/Modal";

export default function Details({
  albumPage,
  setAlbumPage,
  currentAudioTracker,
  setCurrentAudioTracker,
  isModal,
  setIsModal,
  topAlbum,
  searchInputValue,
  setSearchInputValue,
}) {
  let [currentPage, setCurrentPage] = useState(1);
  let itemsPerPage = 10;
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(albumPage.songs.length / itemsPerPage);

  return (
    <>
      <div className="detail-container" id={isModal ? "modal-active" : ""}>
        <Navbar
          isModal={isModal}
          setIsModal={setIsModal}
          data={topAlbum}
          setAlbumPage={setAlbumPage}
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
        <DetailHero albumPage={albumPage} />
        <Table
          albumPage={albumPage}
          itemsPerPage={itemsPerPage}
          startIndex={startIndex}
          endIndex={endIndex}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          setCurrentAudioTracker={setCurrentAudioTracker}
        />
        <Footer
          setCurrentAudioTracker={setCurrentAudioTracker}
          currentAudioTracker={currentAudioTracker}
        />
      </div>
      <div>
        {isModal && <Modal setIsModal={setIsModal} isModal={isModal} />}
      </div>
    </>
  );
}
