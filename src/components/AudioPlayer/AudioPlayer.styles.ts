import styled from "styled-components";

export const StyledAudioPlayer = styled.div`
  width: 100%;
  height: auto;
  & .audio-controls {
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    margin-top: 0;
    margin-bottom: 1rem;
    display: flex;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`;
