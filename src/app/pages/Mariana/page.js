import Image from "next/image";
import styles from "./page.module.css";
import {Header, PaletaDeColores, Filap } from "./componentes/componentes";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Filap></Filap>
      <Filap></Filap>
      <Filap></Filap>
    </div>
  );
}