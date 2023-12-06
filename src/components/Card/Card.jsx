import React from "react";
import "./Card.css";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

export default function Card({ data, follows,setAlbumPage }) {

    const navigate = useNavigate();

    const handleNavigate=()=>{
        setAlbumPage(data)
        navigate(`/${data.slug}`)
    }

  return (
    <Tooltip title={data.title} placement="top" onClick={handleNavigate}>
      <div className="card-container">
        <div className="upper-card">
          <img src={data.image} alt={data.title} className="card-image" />
          {follows === "follows" ? (
            <p className="card-follows">
              {data.follows} {follows}
            </p>
          ) : (
            <p className="card-follows">
              {data.likes} {follows}
            </p>
          )}
        </div>
        <div className="lower-card">
          <p className="card-title">{data.title}</p>
        </div>
      </div>
    </Tooltip>
  );
}
