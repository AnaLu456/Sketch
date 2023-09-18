
import { Bloquep, BloquePrecios } from "../Licha/Componentes/div1";
import Imagediv1, { Textoimagen } from "./Componentes/div1";
import {Header} from "./Componentes/header";

export default function Home() {
  return (
    <div>
    
      <Header></Header>
      <Imagediv1></Imagediv1>
      <BloquePrecios></BloquePrecios>
    </div>
    
  );
}