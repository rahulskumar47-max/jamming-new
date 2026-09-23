# Jammming

Jammming is a React app that lets users search for songs on Spotify, build a playlist, and save that playlist directly to their Spotify account.

## About the Project

I built this project while learning React and working with APIs. The main goal was to understand how React components, state, props, and API requests work together in a real application.

The app uses the Spotify Web API to search for tracks and create playlists.

## Features

Users can search for songs using Spotify.

Search results display the song name, artist, and album.

Users can add songs to their playlist.

Songs that are already in the playlist cannot be added again.

Users can remove songs from their playlist.

Users can give their playlist a custom name.

The playlist can be created directly in the user's Spotify account.

The selected songs are added to the newly created Spotify playlist.

## Technologies Used

React

JavaScript

HTML

CSS

Spotify Web API

Vite

Git and GitHub

## How It Works

The application is divided into several React components.

App manages the main application state and handles communication with the Spotify API.

SearchBar handles the user's search input.

SearchResults displays the tracks returned by Spotify.

Playlist displays the selected tracks and allows the user to enter a playlist name.

Tracklist renders a list of tracks.

Track displays the information for an individual track and provides the add or remove functionality.

Spotify handles the Spotify authentication process.

## Spotify Integration

The application uses the Spotify Web API for authentication, searching for tracks, creating playlists, and adding tracks to playlists.

When a user saves a playlist, the application first gets the authenticated Spotify user's ID. It then creates a new playlist using the name entered by the user. After the playlist is created, the application gets its playlist ID and adds the selected track URIs to it.

## Running the Project

Clone the repository and install the dependencies.

```bash
npm install
```

Create a .env file in the project root and add your Spotify client ID.

```env
VITE_SPOTIFY_CLIENT_ID=your_client_id
```

Start the development server.

```bash
npm run dev
```

Open the local development URL shown by Vite in your browser.

## What I Learned

This project helped me understand how data moves between React components using props and state.

I also practiced controlled inputs, array methods such as map, filter, and some, event handling, asynchronous JavaScript, fetch requests, API authentication, and working with the Spotify Web API.

It also gave me practical experience connecting a React frontend to an external API instead of working only with static data.

## Future Improvements

I would like to improve the user interface, add better error handling, improve the authentication flow, and add more playlist management features in the future.
