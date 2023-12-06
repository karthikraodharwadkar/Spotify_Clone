import React, { useRef, useState } from "react";
import pauseButton from "../../assest/pause.svg";
import playButton from "../../assest/play.svg";
import Slider from "@mui/material/Slider";
import "./Footer.css";

export default function Footer({currentAudioTracker}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
   
  };

  const handlePlayPause = () => {
    if (isPlaying === true) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  return (
    <div className="footer-container">
      <div className="footer-songs-name-section">
        <img
          src={currentAudioTracker?.length===0?"https://pagalworld.cool/siteuploads/thumb/sft1/438_resize2x_250x250.webp":currentAudioTracker?.image}
          alt=""
          style={{ width: "76px", height: "82px" }}
        />
        <div className="song-details-section">
          <p style={{ fontSize: "16px", fontWeight: "400", color: "#FFF" }}>
            {currentAudioTracker?.length===0 ? "Attention! (Charlie Puth)":currentAudioTracker?.title}
          </p>
          <p style={{ fontSize: "12px", fontWeight: "400", color: "#FFF" }}>
          {currentAudioTracker?.length===0 ? "Charlie Puth":currentAudioTracker?.artists}
          </p>
        </div>
      </div>

      <div className="footer-slider-section">
        <audio
          ref={audioRef}
          src="https://files.gospeljingle.com/uploads/music/2023/05/Charlie-Puth-Attention-(Gospeljingle.com).mp3"
          onTimeUpdate={handleTimeUpdate}
        ></audio>
        <div
          className="play-pause"
          onClick={handlePlayPause}
          style={{ cursor: "pointer" }}
        >
          {isPlaying === true ? (
            <img src={pauseButton} alt="pause-btn" />
          ) : (
            <img src={playButton} alt="pause-btn" />
          )}
        </div>
        <div className="slider">
         
          <p className="current-time">{(currentTime / 60).toFixed(2)}</p>
          <Slider
            defaultValue={0}
            aria-label="Default"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSliderChange}
            className="swiper-slider"
            style={{ color: "#34C94B"}}
            
          />

          <p className="duration-time">{(duration / 60).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
