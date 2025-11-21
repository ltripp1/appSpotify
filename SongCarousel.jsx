import React from "react";
import { Carousel } from "antd";

const carouselStyles = {
  width: "640px",
  border: "solid 1px #000",
  margin: "auto",
};

function songToJSX(song) {
  return (
    <iframe
      key={song.id}
      src={`https://open.spotify.com/embed/track/${song.id}?utm_source=generator`}
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export default function SongCarousel({ songs }) {
  return (
    <div style={carouselStyles}>
      <Carousel arrows dotPosition="top">
        {songs.map(songToJSX)}
      </Carousel>
    </div>
  );
}
