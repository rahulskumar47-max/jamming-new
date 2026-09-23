import Tracklist from "./Tracklist";

function SearchResults(props) {


return (
    <>
    <h1>SearchResults</h1>
    <Tracklist trackList = {props.searchResults} addTrack={props.addTrack} isSearchResult={true} playListTrack={props.playlistTracks}/>
    
    </>
)
}

export default SearchResults;