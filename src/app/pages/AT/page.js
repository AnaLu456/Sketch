import Image from "next/image";
import styles from "./page.module.css";
import {Header,Imagecomponents} from "./componentes/components";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Imagecomponents></Imagecomponents>
    </div>
  );
}