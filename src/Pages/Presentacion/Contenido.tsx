import { Link } from "react-router-dom";

const ContentPresentacion: React.FC = () => {
  return (
    <div className="w-full max-w-[800px]] h-auto absolute space-y-10 text-center flex flex-col justify-center items-center p-4">
      <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Bienvenido a la Página Web de Rick & Morty, una página de referencia
        sobre la serie de televisión estadounidense de animación para adultos
        creada por Justin Roiland y Dan Harmon
      </p>

      <button className="bg-green-500 hover:bg-green-700 w-1/3 md:w-1/4 lg:w-60 rounded-full text-white text-lg">
        <Link to="/Pages/Login">CONTINUAR</Link>
      </button>
    </div>
  );
};

export default ContentPresentacion;
