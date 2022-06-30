import React, {useEffect, useState} from 'react';

import {getData} from "./utils/data.utils"

// components
import SongCardList from './components/SongList';
import SongCard from './components/SongCard';
import AppContainer from './components/AppContainer';
import Header from './components/Header';

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
  artist_name: string,
  musicData: [{data: any}],
  duration: number
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
    <AppContainer>
        <Header/>
        <h1>Check out the currently trending Loudly soundtracks</h1>
        <SongCardList>
          {musicData.map((artist) => {
            return (
              <SongCard key={artist.id} artists={artist}/>
            )
        })}
        </SongCardList>
    </AppContainer>
  )
}

export default App;
