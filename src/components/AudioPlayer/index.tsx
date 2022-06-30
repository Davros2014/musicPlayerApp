import React, {useState, useRef, useEffect} from "react";

import { StyledAudioPlayer } from "./AudioPlayer.styles";

import { AppMusicProps } from "../../App";

type AudioProps = {
  artists: AppMusicProps,
};

const AudioPlayer = ({ artists }: AudioProps) => {
  const {music_file_path, duration} = artists;
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [songDuration, setSongDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  // ref for audio player
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null)

  useEffect(()=> {
    const seconds = Math.floor(duration);
    setSongDuration(seconds);
    // progressBarRef.current!.max = seconds;
  }, [duration])

  const calcTime = (secs: number) => {
      const minutes =  Math.floor(secs / 60);
      const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${returnedMinutes}:${returnedSeconds}`
  }

  const handlePlay = () => {
    const previousValue = isPlaying;
    setIsPlaying(!previousValue)
    if (!previousValue) {
      audioPlayerRef.current!.play();
     } else {
      audioPlayerRef.current!.pause();
     } 
  } 

  // const changeRange = () => {
  //   audioPlayerRef.current!.currentTime = progressBarRef.current!.value;
  //   changePlayerCurrentTime();
  // }

  // const changePlayerCurrentTime = () => {
  //   progressBarRef.current!.style.setProperty('--before-width', `${progressBarRef.current.value / duration * 100}%`);
  //   setCurrentTime(progressBarRef.current!.value);
  // }

  

  return (
    <StyledAudioPlayer>
      <audio ref={audioPlayerRef} className="audio-controls" preload="metadata" src={music_file_path}></audio>
      <div className="controls-container">
        <button><i className="fa-solid fa-backward control-button"></i></button>
        <button className="main-btn" onClick={handlePlay}>{ isPlaying ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}</button>
        <button><i className="fa-solid fa-forward control-button"></i></button>
      </div>
      <div className="progress-container">
          <div>{calcTime(currentTime)}</div>
          <input ref={progressBarRef} type="range" className="progress-bar" defaultValue="0" />
          <div>{duration && !isNaN(duration) && calcTime(songDuration)}</div>
      </div> 
    </StyledAudioPlayer>
  );
};

export default AudioPlayer;
