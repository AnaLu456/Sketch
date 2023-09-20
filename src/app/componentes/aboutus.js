import React from "react";
import styles from "./aboutus.module.css";

function aboutus() {
  return (
    <body>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <main>
            <div className={styles.logo} paginaweb="logo">
              <img className={styles.logo} src="pics\Wave.png" />
            </div>

            <div className={styles.redesSociales} paginaweb="botontw">
              <a href=""></a>
              <img
                className={styles.botontwlinkicono}
                src="pics\tw.png"
              />
              <p>@waveattheworld</p>
            </div>

            <div className={styles.redesSociales} paginaweb="botonyt">
              <a href="">
                <img
                  className={styles.botonytlinicono}
                  src="pics\yt.png"
                />
              </a>
              <p>waveattheworld</p>
            </div>

            <div className={styles.redesSociales} paginaweb="botoninsta">
              <a href="https://www.instagram.com/waveattheworld/?igshid=MzRlODBiNWFlZA==">
                <img
                  className={styles.botoninstalinkicono}
                  src="pics\insta.png"
                />
              </a>
              <p>waveattheworld</p>
            </div>

            <div className={styles.redesSociales} paginaweb="botonfb">
              <a href="">
                <img
                  className={styles.botonfblinkicono}
                  src="pics\fb.png"
                />
              </a>
              <p>waveattheworld</p>
            </div>
          </main>
        </div>
      </div>
      <div className={styles.rightSide}>
        <main>
          <section id="contacto">
            <h1>Contact Us</h1>
            <form
              className={styles.form}
              method="POST"
              action="https://formspree.io/f/xeqbzejy"
            >
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre"></input>
              <br></br>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email"></input>
              <br></br>
              <label for="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje"></textarea>
              <br></br>
              <button type={styles.submit}>Enviar</button>
            </form>
            <p>@ 2023 WAVE</p>
          </section>
        </main>
      </div>
    </body>
  );
}

export default aboutus;