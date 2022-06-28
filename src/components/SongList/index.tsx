import React from 'react';
import { StyledSongList } from './SongList.styles';

interface Props {
    children: JSX.Element[] | JSX.Element
}

const SongCardList = ({children}: Props) => {
    return (
        <StyledSongList>
            {children}
        </StyledSongList>
    );
};

export default SongCardList;