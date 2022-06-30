import styled from "styled-components";

export const StyledAudioPlayer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgb(0,248,196);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
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
    & .main-btn {
      background: none;
      width: 3rem;
      height: 3rem;
      border: 2px solid rgb(0,248,196);
      border-radius: 100px;
      margin: 0 1rem;
      cursor: pointer;
      color: rgb(0,248,196);
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
    width: 70%;
    & .progress-bar {
      background: rgb(0,248,196);
      width: 80%;
      border: 1px solid red;
      padding: 0 1rem;
    }
  }
  
`;
