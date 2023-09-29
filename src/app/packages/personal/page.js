import Image from "next/image";
import styles from "./page.module.css";
import {Header, PaletaDeColores, Filap, EstructuraFila } from "../../componentes/componentes";
import { ContactPage } from "../outside/componentes/components";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <Filap></Filap>
      <ContactPage ></ContactPage>
    </div>
  );
}