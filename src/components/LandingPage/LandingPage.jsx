import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Section from "../Section/Section";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import FilterSongs from "../FilterSongs/FilterSongs";
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import "./LandingPage.css";
import Modal from "../Navbar/Modal/Modal";

function LandingPage({
  setAlbumPage,
  currentAudioTracker,
  setCurrentAudioTracker,
  isModal,
  setIsModal,
  allGenreSongs,
  newAlbum,
  topAlbum,
  searchInputValue,
  setSearchInputValue,
}) {
  return (
    <>
      <div className="landingPage-container" id={isModal ? "modal-active" : ""}>
        <Navbar
          data={topAlbum}
          setIsModal={setIsModal}
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
          setAlbumPage={setAlbumPage}
        />
        <Hero />
        <Section
          title="Top Albums"
          data={topAlbum}
          setAlbumPage={setAlbumPage}
          
        />
        <Section
          title="New Albums"
          data={newAlbum}
          setAlbumPage={setAlbumPage}
        
        />
        <HorizontalLine />
        <FilterSongs
          data={allGenreSongs}
          title="Songs"
          setCurrentAudioTracker={setCurrentAudioTracker}
        />
        <HorizontalLine />
        <Faq />
        <Footer currentAudioTracker={currentAudioTracker} />
      </div>
      <div>
        {isModal && <Modal setIsModal={setIsModal} isModal={isModal} />}
      </div>
    </>
  );
}

export default LandingPage;
