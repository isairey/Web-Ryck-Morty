import ContentPresentacion from "./Contenido";
import VideoFondo from "../../Componentes/Fondos/Fondo";

const Presentacion: React.FC = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center lg:">
      <VideoFondo />
      <ContentPresentacion />
    </div>
  );
};

export default Presentacion;
