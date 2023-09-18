import Image from "next/image";
import styles from "./page.module.css";
import {BloquePrecios, BloquePrecios2, Header,Imagecomponents, Imagecomponents2} from "./componentes/components";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Imagecomponents></Imagecomponents>
      <BloquePrecios></BloquePrecios>
      <Imagecomponents2></Imagecomponents2>
      <BloquePrecios2></BloquePrecios2>
    </div>
  );
}