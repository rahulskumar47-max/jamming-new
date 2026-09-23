import Tracklist from "./Tracklist";
import { useState } from "react";
function Playlist(props) {
    const[name,setName] = useState('');


return (
    <>
    <h1>Playlist</h1>
    <input value={name} onChange={(e) =>setName( e.target.value)}/>
    <button onClick={handleSave}>Save to Spotify</button>
    <Tracklist trackList ={props.playList} removeTrack={props.removeTrack} isPlaylist={true}/>
    
    </>
)
}

export default Playlist;