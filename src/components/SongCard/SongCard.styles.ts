import styled, {keyframes} from 'styled-components';


const bouncing = keyframes`
 0% { transform: scale(1); }
 10% { transform: scale(1.5); }
 20% { transform: scale(1); }
 30% { transform: scale(1.5); }
 40% { transform: scale(1); }
 50% { transform: scale(1.5); }
 60% { transform: scale(1); }
 70% { transform: scale(1.5); }
 80% { transform: scale(1); }
 90% { transform: scale(1.5); }
 100% { transform: scale(1); }
`

export const StyledSongCard = styled.li`
    position: relative;
    width: 90vw;
    border-radius: 16px;
    box-shadow: 1px 1px 4px 4px rgba(0, 0, 0, 0.125);
    margin-bottom: 3rem;
    background-color: rgba(0, 0, 0, 1);
    color: rgb(0, 248, 196);
    padding: 2rem 3rem;
    font-size: clamp(0.75rem, 0.7vw, 1rem);
    overflow: hidden;
    z-index: 0;
    font-family: "Druk Wide Cy Web Medium";
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-size: cover;
    @media (min-width: 980px) {
        width: 60vw;
    }
    @media (min-width: 1440px) {
        width: 40vw;
    }
    
    & .song-container {
        display: flex;
        margin-bottom: 1rem;
        & .song-details {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
        width: 100%;
        justify-content: space-between;            
            & p {
                text-transform: uppercase;
                color: white;
                font-size: clamp(0.5rem, 0.5vw, 0.85rem);
                margin-bottom: 0.25rem;
            }
            & h2 {
                margin-bottom: 1rem;
            }
        }
        & .likes-container {
            width: 10rem;
            text-align: right;
            & button {
                outline: none;
                background: none;
                border: none;
                & i {
                    margin-top: 1rem;
                    color: white;
                    &.clicked {
                    animation: 1.5s ease-in-out 0.5s ${bouncing} infinite;
                    }
                }
            }
        }
    }
    & img {
        position: relative;
        width: 30%;
        height: auto;
        border-radius: 8px;
        border: 2px solid rgba(0, 248, 196, 0.75);
        &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: calc(100% + 1rem);
        height: calc(100% + 1rem);
        border: 2px solid rgba(0, 248, 196, 0.75);
        }
    }
    & .genres {
        display: flex;
        width: 100%;
        & p {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 0.5rem 1rem;
            margin-right: 1rem;
            border-radius: 20px;
            color: white;
            font-family: 'Open Sans', sans-serif;
        }
    }
`