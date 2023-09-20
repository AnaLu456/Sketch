
import { BloquePrecios1, BloquePrecios2, BloquePrecios3, Imagendiv2, Imagendiv3} from "../Licha/Componentes/div1";
import Imagediv1 from "./Componentes/div1";
import {Header} from "./Componentes/header";


export default function Home() {
  return (
    <div>
    
      <Header></Header>
      <Imagediv1></Imagediv1>
      <BloquePrecios1></BloquePrecios1>
      <Imagendiv2> </Imagendiv2>
      <BloquePrecios2></BloquePrecios2>
      <Imagendiv3></Imagendiv3>
      <BloquePrecios3></BloquePrecios3>

    </div>
    
  );
}