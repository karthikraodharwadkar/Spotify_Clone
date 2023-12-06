import React from 'react'
import "./Card.css";
import Tooltip from "@mui/material/Tooltip";

export default function GenreFilteredCard({data,follows,setCurrentAudioTracker}) {
  return (
    <Tooltip title={data.title} placement="top" onClick={()=>setCurrentAudioTracker(data)}>
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
  )
}
