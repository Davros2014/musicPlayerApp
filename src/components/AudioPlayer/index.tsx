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
      <audio className="audio-controls" controls src={music_file_path}>
      Your browser does not support the
      preload="metadata"
      <code>audio</code> element.</audio>
    </StyledAudioPlayer>
  );
};

export default AudioPlayer;
