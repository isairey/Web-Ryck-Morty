import { useState } from "react";
import admin from "../../Data/admin.json";
import { useNavigate } from "react-router-dom";

// Tipado de los datos de usuario

type Admin = {
  user: string;
  password: string;
};

// Componente de Login

const ContentLogin: React.FC = () => {
  // Manejo del estado para los datos del formulario y el error
  const [formData, setFormData] = useState<Admin>({ user: "", password: "" });
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  // Función para manejar cambios en los inputs

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el envío del formulario

  const handleSubmit = (
    e?: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e) {
      e.preventDefault();
    }

    // Validación de usuario y contraseña

    if (formData.user === admin.user && formData.password === admin.password) {
      console.log("Login Correcto");
      navigate("/Pages/Home"); // Redirige a la página de inicio
    } else {
      console.log("Usuario o contraseña incorrecta");
      setShowError(true); // Muestra el mensaje de error
    }
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-900 ">
      <form
        onSubmit={handleSubmit}
        className=" text-white w-full max-w-[400px] p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-lg absolute ">
        <label htmlFor="user">Nombre de Usuario:</label>
        <input
          required
          className="w-full h-[40px] text-black mt-3 mb-3 p-2 rounded"
          type="text"
          id="user"
          value={formData.user}
          name="user"
          onChange={inputValue}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          required
          className="w-full h-[40px] text-black mt-3 p-2 rounded"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={inputValue}
        />
        {showError ? (
          <p className="text-sm text-red-500 underline mt-4">
            Usuario o contraseña incorrecta
          </p>
        ) : null}
        <button className="bg-green-500 hover:bg-green-700 w-full rounded-full mt-5 h-[40px]">
          INICIAR SESION
        </button>
      </form>
    </div>
  );
};

export default ContentLogin;
