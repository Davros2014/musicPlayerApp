import React, {useState} from 'react';
import { StyledSongCard } from './SongCard.styles';

// import types
import { AppMusicProps } from "../../App";
import AudioPlayer from '../AudioPlayer';

type CardProps = {
  artists: AppMusicProps;
//   handleClick: () => void;
}

const APIKEY = "___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8"


const SongCard = ({artists}: CardProps) => {
    const baseUrl = "https://api-stg.jam-community.com"
    const {id, name, artist_name, cover_image_path, likes, song_genres} = artists;
    const [isLiked, setIsLiked] = useState(false);
    const handleClick = (id: string) => {
        
        const formBody = encodeURIComponent("id") + '=' + encodeURIComponent(id);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formBody
        };
        fetch(`${baseUrl}/interact/like?apikey=${APIKEY}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log("posted data", data))
            .catch(e => console.log(e))
        setIsLiked(!isLiked)
    }
    const genres = song_genres.map((genre) => {
        return (
            <h6 key={genre.id} className="genre-name">{genre.name} </h6>
        )
    });
    return (
        <StyledSongCard>
            {/* card basic structure
                // outer div container 
                    > inner div
                        > thumnail img of album art 
                        > song title and possibly other artist details here
                        > like button 
                    > audio tag here
                        > play/pause button
                        > other controls / details
            */}
            <div className="song-container">
                <img alt={name} src={cover_image_path}/>
                <div className="song-details">
                    <p className="small-header">Artist</p>
                    <h2>{artist_name}</h2>
                    <p className="small-header">Song Title</p>
                    <h2>{name}</h2>
                    <p className="small-header">Genres</p>
                    <div className="genres">{genres}</div>
                </div>
                <div className="likes-container">
                    <button type="submit" onClick={() => handleClick(id)}><i className={`fa-solid fa-heart ${isLiked ? "clicked" : "normal"}`}></i></button>
                    <p>Likes: {likes}</p>
                </div>
            </div>
            <AudioPlayer artists={artists}/>
        </StyledSongCard>
    );
};

export default SongCard;