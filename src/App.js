import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Details from "./components/Details/Details";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [albumPage, setAlbumPage] = useState([]);
  const [currentAudioTracker, setCurrentAudioTracker] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);
  const [allGenreSongs, setAllGenreSongs] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  const fetchTopAlbum = async () => {
    let result = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/top"
    );
    setTopAlbum(result.data);
  };

  const fetchNewAlbum = async () => {
    let result = await axios.get(
      "https://qtify-backend-labs.crio.do/albums/new"
    );
    setNewAlbum(result.data);
  };

  const fetchAllGenreSongs = async () => {
    let result = await axios.get("https://qtify-backend-labs.crio.do/songs");
    setAllGenreSongs(result.data);
  };

  useEffect(() => {
    fetchTopAlbum();
    fetchNewAlbum();
    fetchAllGenreSongs();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              allGenreSongs={allGenreSongs}
              newAlbum={newAlbum}
              topAlbum={topAlbum}
              setAlbumPage={setAlbumPage}
              currentAudioTracker={currentAudioTracker}
              setCurrentAudioTracker={setCurrentAudioTracker}
              isModal={isModal}
              setIsModal={setIsModal}
              searchInputValue={searchInputValue}
              setSearchInputValue={setSearchInputValue}
            />
          }
        />
        <Route
          path={`/${albumPage.slug}`}
          element={
            <Details
              topAlbum={topAlbum}
              albumPage={albumPage}
              setAlbumPage={setAlbumPage}
              currentAudioTracker={currentAudioTracker}
              setCurrentAudioTracker={setCurrentAudioTracker}
              isModal={isModal}
              setIsModal={setIsModal}
              searchInputValue={searchInputValue}
              setSearchInputValue={setSearchInputValue}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
