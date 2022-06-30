import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: fixed;
    width: 100vw;
    height: 4rem;
    background-color: rgb(0, 248, 196);
    z-index: 101;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(0.75rem, 1vw, 1rem) clamp(1.5rem, 2vw, 3rem);
    @media (min-width: 768px) {
        justify-content: space-between;;
    }
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(0deg, #020024 0%, #000000 15%, rgb(344, 248, 196) 100%);
        opacity: 0.5;
        z-index: -1;
    }
    & img {
        width: 5rem;
        filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.125));
    }
    & nav {
        display: none;
         @media (min-width: 768px) {
            display: flex;
        }
        & li {
            margin-left: 2rem;
            padding: 0.5rem 0;
            border-bottom: 2px solid transparent;
            color: #3a4039;
            font-size: clamp(1rem, 0.7vw, 1.6rem);
            font-family: 'Open Sans', sans-serif;
            font-weight: 500;
            cursor: pointer;
            &:hover {
                padding: 0.5rem 0;
                border-color: white;
                transition: 0.25s all ease-in-out;
            }
        }
    }
`