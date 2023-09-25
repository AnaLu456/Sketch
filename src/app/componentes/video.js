import React from 'react'
import styles from "./video.module.css"


function Video() {
  return (
    <div className={styles.video}>
      <iframe className={styles.contenido} src="https://www.youtube.com/embed/ytTw4KZnop8?si=J6GzZ0FBuxhNi3DR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  );
}

export default Video