import React, { useState } from "react";
import SongForm from "./SongForm";
import SongCarousel from "./SongCarousel";
import "./App.css";

export default function App() {
  const [songs, setSongs] = useState([]);

  async function fetchData(searchTerm, limit) {
    const baseURL = "https://www.apitutor.org/spotify/simple/v1/search";
    const url = `${baseURL}?q=${searchTerm}&type=track&limit=${limit}`;

    const request = await fetch(url);
    const data = await request.json();
    setSongs(data);
  }

  return (
    <section>
      {/* Form notifies App via onSearch callback */}
      <SongForm onSearch={fetchData} />

      {/* Carousel updates whenever songs changes */}
      <SongCarousel songs={songs} />
    </section>
  );
}
