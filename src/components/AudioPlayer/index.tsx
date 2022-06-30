import React, {useState} from "react";

import { StyledAudioPlayer } from "./AudioPlayer.styles";

import { AppMusicProps } from "../../App";

type AudioProps = {
  artists: AppMusicProps,
};

const AudioPlayer = ({ artists }: AudioProps) => {
  const {music_file_path} = artists;
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }  
  return (
    <StyledAudioPlayer>
      <audio className="audio-controls" preload="metadata" src={music_file_path}>
        Your browser does not support the
        <code>audio</code> element.</audio>
      <div className="controls-container">
        <button><i className="fa-solid fa-backward control-button"></i></button>
        <button className="main-btn" onClick={handlePlay}>{ isPlaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}</button>
        <button><i className="fa-solid fa-forward control-button"></i></button>
      </div>
      <div className="progress-container">
          <div>0:00</div>
          <input type="range" className="progress-bar"/>
          <div>1:04</div>
      </div>
      
    </StyledAudioPlayer>
  );
};

export default AudioPlayer;


    // <StyledAudioPlayer>
    //   <audio className="audio-controls" controls src={music_file_path}>
    //   Your browser does not support the
    //   preload="metadata"
    //   <code>audio</code> element.</audio>
    // </StyledAudioPlayer>