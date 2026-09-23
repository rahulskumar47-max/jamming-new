

function Track(props) {


return (
    <>
    <h1>Track</h1>
    <div>
        <h1>{props.track.name}</h1>
        <h1>{props.track.artists[0].name}</h1>
        <h1>{props.track.album.name}</h1>
        {props.isSearchResult && (
            <button onClick={() => props.addTrack(props.track)}>+</button>

        )}
        
        {props.isPlaylist &&  (
            <button onClick={() => props.removeTrack(props.track)}>-</button>
         )}
        
    </div>
    
    </>
)
}

export default Track;