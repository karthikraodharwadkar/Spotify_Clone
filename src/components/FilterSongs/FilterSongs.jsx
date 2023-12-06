import React, { useEffect, useState } from "react";
import "./FilterSongs.css";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import SwiperData from "../SwiperData/SwiperData";
// import Card from '../Card/Card'
import GenreFilteredCard from "../Card/GenreFilteredCard";

export default function FilterSongs({ data, title, setCurrentAudioTracker }) {
  const [genreData, setGenreData] = useState([]);
  const [selectGenre, setSelectGenre] = useState("All");

  const fetchGenreData = async () => {
    let response = await axios.get("https://qtify-backend-labs.crio.do/genres");
    setGenreData(response.data);
  };

  const fetchGenreArray = (genreData) => {
    let genreArray = ["All"];
    genreData?.data?.forEach((item) => {
      genreArray.push(item.label);
    });
    return genreArray;
  };

  const displayGenres = fetchGenreArray(genreData);

  const filterGenreData = (data) => {
    if (selectGenre === "All") {
      return data;
    } else {
      let filteredGenre = data.filter(
        (item) => item.genre.label === `${selectGenre}`
      );
      return filteredGenre;
    }
  };

  const displayFilteredGenreData = filterGenreData(data);

  useEffect(() => {
    fetchGenreData();
  }, []);

  const handleGenreSelect = (event) => {
    setSelectGenre(event.target.id);
  };

  return (
    <div className="filter-container">
      <div className="filter-header">
        <h3 className="filter-title">{title}</h3>
      </div>
      <div className="filter-genres">
        {displayGenres.map((item, index) => {
          return (
            <div
              key={index}
              onClick={handleGenreSelect}
              id={item}
              className={selectGenre === item ? "selectedFilterGenre" : ""}
            >
              {item}
            </div>
          );
        })}
      </div>
      {
        data.length === 0 ? (
          <div className="circularProgress">
            <CircularProgress />
          </div>
        ) : (
          <SwiperData
            data={displayFilteredGenreData}
            component={(displayFilteredGenreData) => (
              <GenreFilteredCard
                data={displayFilteredGenreData}
                follows="likes"
                setCurrentAudioTracker={setCurrentAudioTracker}
              />
            )}
          />
        )

        // <SwiperData data={displayFilteredGenreData} component={(displayFilteredGenreData) => <Card data={displayFilteredGenreData} follows="likes" setAlbumPage={setAlbumPage}/>} />
      }
    </div>
  );
}
