import { useState } from 'react';
import './App.css'
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import authorize from './Spotify';



function App() {
  const [searchResults,setSearchResults] = useState([]);
  const [playlistTracks,setPlaylistTracks] = useState([]);
  async function handleSearch(term){
    const token =  localStorage.getItem('access_token');
    const url = `https://api.spotify.com/v1/search?q=${term}&type=track`;
    const response =  await fetch(url,{
      method:'GET',
      headers: {
        "Authorization":`bearer ${token}`
      }

    })
    const data = await response.json();
    const tracks =  data.tracks.items;
    setSearchResults(tracks);

  }
  function addTrack(track){
    setPlaylistTracks(prevTracks => [...prevTracks,track])
     
  }
  function removeTrack(track){
    setPlaylistTracks(prevTracks => prevTracks.filter(t => t.id !== track.id))
  }

   async function savePlaylist(name){
    const token = localStorage.getItem('access_token');
   const url = 'https://api.spotify.com/v1/me/playlists';
   const response = await fetch(url,{
    method:'GET',
    headers:{
      'Authorization':`Bearer ${token}`
    }
   })
   const data = await response.json();
   const userId = data.id;
   const createPlaylistUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
   const createPlaylistResponse = await fetch(createPlaylistUrl,{
    method: 'POST',
    headers:{
      'Authorization':`Bearer ${token}`,
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      name:name
    })

   })
   const createPlayData =  await creastePlaylistResponse.json();

  }


  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div>
        <button onClick={authorize}>Login to spotify</button>
      </div>

      <SearchResults searchResults = {searchResults} addTrack={addTrack}  playlistTracks={playlistTracks}/>
      <Playlist playList={playlistTracks} removeTrack={removeTrack} savePlaylist={savePlaylist}/>
    </>
  )
}

export default App
