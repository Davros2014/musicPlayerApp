import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: relative;
    width: 100vw;
    height: 5rem;
    background-color: rgb(0, 248, 196);
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
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
        background: red;
        padding-left: 
    }
    & nav {
        display: flex;
        & li {
            margin-left: 1rem;
            cursor: pointer;
        }
    }
`