import Track from "./Track";

function Tracklist(props) {


return (
    <>
    <h1>Tracklist</h1>
    {props.trackList.map(track => (
        <Track key = {track.id} track = {track} addTrack={props.addTrack} removeTrack ={props.removeTrack} isPlaylist = {props.isPlaylist}  playlistTracks={props.playlistTracks}/>

    ))}
    
    </>
)
}

export default Tracklist;