import styled from 'styled-components';

const StyledAppContainer = styled.div`
   position: relative;
    width: 100vw;
    /* height: 100vh; */
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
        background-color: #e0ebd6;

    z-index: 0;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        /* background-image: linear-gradient(180deg, #020024 0%, #000000 35%, rgb(0, 248, 196) 100%); */
        opacity: 0.2;
        z-index: -1;
    }
    & h1 {
        padding-top: 6rem;
        color: rgb(0, 248, 196);
        color: #3a4039;
        /* color: white; */
        letter-spacing: 0.055rem;
        font-size: clamp(1rem, 0.7vw, 2rem);
        font-family: "Druk Wide Cy Web Medium";
        text-align: center;
    }
`

export default StyledAppContainer;