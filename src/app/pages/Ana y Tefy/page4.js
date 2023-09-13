import Image from "next/image";
import styles from "./page4.module.css";
import {Header,PaletaDeColores} from "./componentes/componentes";

export default function Home() {
  return (
    <div>
      <PaletaDeColores></PaletaDeColores>
      <Header></Header>
    </div>
  );
}