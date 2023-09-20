
import { Bloquep, BloquePrecios, BloquePrecios1, BloquePrecios2, Imagendiv2 } from "../Licha/Componentes/div1";
import Imagediv1, { Textoimagen } from "./Componentes/div1";
import {Header} from "./Componentes/header";


export default function Home() {
  return (
    <div>
    
      <Header></Header>
      <Imagediv1></Imagediv1>
      <BloquePrecios1></BloquePrecios1>
      <Imagendiv2> </Imagendiv2>
      <BloquePrecios2></BloquePrecios2>
    </div>
    
  );
}