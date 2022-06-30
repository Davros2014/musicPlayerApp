import React from "react";

import { StyledAudioPlayer } from "./AudioPlayer.styles";

import { AppMusicProps } from "../../App";

type AudioProps = {
  artists: AppMusicProps,
};

const AudioPlayer = ({ artists }: AudioProps) => {
  const {music_file_path} = artists;
  return (
    <StyledAudioPlayer>
      <audio className="audio-controls" preload="metadata" data-attributecontrols src={music_file_path}>
        Your browser does not support the
        <code>audio</code> element.
        <button>Back 10 seconds</button>
        <button>Play / Pause</button>
        <button>Forward 10 seconds</button>
        {/*Time */}
        <div>0:00</div>
        {/*progress */}
        <input type="range" className="progress-bar"/>
        {/*song length */}
      </audio>
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