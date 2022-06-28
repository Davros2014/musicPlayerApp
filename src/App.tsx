import React, {useEffect, useState} from 'react';

import {getData} from "./utils/data.utils"

// components
import SongCardList from './components/SongList';

// styled components
import styled from 'styled-components';

const StyledAppContainer = styled.div`
   position: relative;
    width: 100vw;
    height: 100vh;
    background-color: black;
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
        /* background-image: linear-gradient(0deg, #020024 0%, #000000 35%, rgb(0, 248, 196) 100%); */
        opacity: 0.2;
        z-index: -1;
    }
`

export const baseUrl = "https://api-stg.jam-community.com"

export type AppMusicProps = {
  id: string;
  name: string;
  artist: [{ id: string; created: string; artist_name: string}]
  likes: number;
  cover_image_path: string;
  music_file_path: string;
  song_genres: [{id: string; name: string}]
  song_release: string,
  artist_name: string
}

const App = () => {
  const [musicData, setMusicData] = useState<AppMusicProps[]>([]);
  console.log("musicData", musicData)
    useEffect(() => {
      const fetchUsers = async () => {
        const users = await getData<AppMusicProps[]>(`${baseUrl}/song/trending`);
        setMusicData(users)
      } 
    fetchUsers();
  }, []);
  return (

    <StyledAppContainer>
        {/*Add a header here*/}
        {/*List of songCards here - map over json data > list SongCard components*/}
        <SongCardList/>

    </StyledAppContainer>
  )
}

export default App;
