import styled from "styled-components";

export const StyledAudioPlayer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0,248,196, 0.3);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  background: rgba(0,0,0, 0.5);
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-top: 1.5rem;
  }
  & .audio-controls {
    font-family: 'Open Sans', sans-serif;
    background-color: white;
    width: 100%;
    margin-top: 0;
    margin-bottom: 1rem;
    display: flex;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }
  & div {
      font-family: 'Open Sans', sans-serif;
      font-weight: 700;
      color: white;
      font-size: 1rem;
  }
  & .controls-container {
      display: flex;
      width: 30%;
      padding-right: 1rem;
      & .main-btn {
      background: none;
      width: clamp(1.75rem, 3vw, 3rem);
      height: clamp(1.75rem, 3vw, 3rem);
      border: 2px solid rgb(0, 248, 196);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      margin: 0 clamp(0.5rem, 1vw, 1rem);
      cursor: pointer;
      color: rgb(0, 248, 196);
      transition: 0.2s color ease-in-out;
        &:hover {
          transition: 0.2s all ease-in-out;
          color: white;
        }
        &:hover > i {
          transition: 0.2s all ease-in-out;
          transform: scale(1.2);
        }
    }
    & .control-button {
        cursor: pointer;
        color: rgb(0,248,196);
        transition: 0.2s color ease-in-out;
        &:hover {
          transition: 0.2s color ease-in-out;
          color: white;
        }
    }
  }
  & .progress-container {
    display: flex;
    align-items: center;
    width: 70%;
    & .progress-bar {
      position: relative;
      --bar-bg: rgba(0,248,196, 0.35);
      --before-width: 0;
      --before-color: rgba(0,248,196, 1);
      --playhead: white;
      --playhead-selected: rgba(0,248,196, 0.35);
      appearance: none;
      outline: none;
      border: none;
      background: var(--bar-bg);
      width: 80%;
      height: 10px;
      margin: 0 1rem;
      border-radius: 8px;
      z-index: 0;
    }
    // safari
    & .progress-bar::-webkit-slider-runnable-track {
      outline: none;
      border: none;
      background: var(--bar-bg);
      width: 100%;
      height: 10px;
      border-radius: 8px;
    }
    // firefox 
    & .progress-bar::-moz-range-track {
      appearance: none;
      outline: none;
      border: none;
      background: var(--bar-bg);
      width: 100%;
      height: 10px;
      margin: 0 1rem;
      border-radius: 8px;
    }
    & .progress-bar::-moz-focus-outer {
      border: 0;
    }
    // progress bar for chrome and safari
    & .progress-bar::before {
      content: "";
      position: absolute;
      height: 10px;
      width: var(--before-width);
      background-color: var(--before-color);
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      z-index: -1;
      top: 0;
      left: 0;
      cursor: pointer;
    }
    // progress bar - firefox
    & .progress-bar::-moz-range-progress {
      content: "";
      position: absolute;
      height: 10px;
      width: var(--before-width);
      background-color: var(--before-color);
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      z-index: -1;
      top: 0;
      left: 0;
      cursor: pointer;
    }
    // playhead -  for chrome and safari
    & .progress-bar::-webkit-slider-thumb {
      -webkit-appearance: none;
      z-index: 4;
      height: 14px;
      width: 14px;
      border: none;
      margin-top: -2px;
      background: var(--playhead);
      border-radius: 100%;
      cursor: pointer;
      box-shadow: 1px 1px 8px rgba(0, 0, 0, 1);
    }
    // while dragging playhead - chrome / safari
    & .progress-bar:active::-webkit-slider-thumb {
      transform: scale(1.2);
      border: 2px solid var(--playhead-selected);
    }
    // while dragging playhead - firefox
    & .progress-bar::-moz-range-thumb {
      z-index: 4;
      height: 14px;
      width: 14px;
      border: transparent;
      background: var(--playhead);
      border-radius: 100%;
      cursor: pointer;
      box-shadow: 1px 1px 8px rgba(0, 0, 0, 1);
    }
    & .progress-bar:active::-moz-range-thumb {
      transform: scale(1.05);
      border: 2px solid var(--playhead-selected);
    }
  } 
`;
