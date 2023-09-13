import Image from "next/image";

import {Header,PaletaDeColores} from "./Componentes/header";

export default function Home() {
  return (
    <div>
      <PaletaDeColores></PaletaDeColores>
      <Header></Header>
    </div>
  );
}