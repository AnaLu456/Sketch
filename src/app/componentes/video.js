import React from 'react'
import styles from "./video.module.css"


function Video() {
  return (
    <div className={styles.video}>
      <iframe className={styles.contenido} src="https://www.youtube.com/embed/mUxzKVrSAjs?si=ZRt2Quw70jGoPn-o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  );
}

export default Video