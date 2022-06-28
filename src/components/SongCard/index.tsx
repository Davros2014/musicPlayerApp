import React from 'react';
import { StyledSongCard } from './SongCard.styles';

// import types
import { AppMusicProps } from "../../App";

type CardProps = {
  artists: AppMusicProps;
//   handleClick: () => void;
}



const SongCard = ({artists}: CardProps) => {

    // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log("clicked")
    // }
    const {name, artist_name, cover_image_path, likes, song_genres} = artists;
    const genres = song_genres.map((genre) => {
        return (
            <p key={genre.id}>{genre.name}</p>
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
                    <p>Likes: {likes}</p>
                    {/* <button type="submit" onClick={handleClick}><i className="fa-solid fa-heart clicked"></i></button> */}
                </div>
                {/* music player here */}
            </div>
        </StyledSongCard>
    );
};

export default SongCard;