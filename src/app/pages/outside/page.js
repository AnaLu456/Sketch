import Image from "next/image";
import styles from "./page.module.css";
import {BloquePrecios, BloquePrecios2, BloquePrecios3, BloquePrecios4, ContactPage, Header,Imagecomponents, Imagecomponents2, Imagecomponents3, Imagecomponents4} from "./componentes/components";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Imagecomponents></Imagecomponents>
      <BloquePrecios></BloquePrecios>
      <Imagecomponents2></Imagecomponents2>
      <BloquePrecios2></BloquePrecios2>
      <Imagecomponents3></Imagecomponents3>
      <BloquePrecios3></BloquePrecios3>
      <Imagecomponents4></Imagecomponents4>
      <BloquePrecios4></BloquePrecios4>
      <ContactPage></ContactPage>
    </div>
  );
}