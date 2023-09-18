import React from 'react'
import ReactPlayer from 'react-player/youtube';


function Video() {
  const videoUrl = "https://www.youtube.com/watch?v=ytTw4KZnop8"
  return (
    <div className="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ytTw4KZnop8?si=J6GzZ0FBuxhNi3DR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
}

export default Video