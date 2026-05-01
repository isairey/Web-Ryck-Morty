import { useNavigate } from "react-router-dom";
import errorFondo from "../../assets/errorFondo.png";

type Error = {
  error: string; // Propiedad para el mensaje de error (actualmente no se utiliza)
};

const ErrorFondo: React.FC<Error> = () => {
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const backLogin = () => {
    navigate("/Pages/Login"); // Navega a la página de inicio de sesión
  };
  return (
    <div className="flex justify-center items-start mt-8">
      <div className="bg-white border border-black w-[500px] h-[300px]  text-[30px] text-center rounded-full pt-10 absolute">
        <img src={errorFondo} alt="error" className="w-[100px] mx-auto" />
        <h1>¡Ups! Ha ocurrido un error.</h1>
        <p>¿Quieres volver al inicio?</p>
        <button
          onClick={backLogin}
          className="bg-red-500 hover:bg-red-600 rounded-full w-[120px] text-white mt-2">
          Volver
        </button>
      </div>
    </div>
  );
};

export default ErrorFondo;
