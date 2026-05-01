import { useState, useContext, useEffect } from "react";
import DataApi from "../Hooks/ApiContext";
import { Character } from "../CharactersApi";

const FiltroBuqueda: React.FC<{
  setFilteredData: (data: Character[]) => void; // Función para establecer los datos filtrados
}> = ({ setFilteredData }) => {
  const [texto, setText] = useState(""); // Estado para almacenar el texto de búsqueda
  const { data } = useContext(DataApi) || { data: [] }; // Obtiene los datos del contexto

  // Función que se llama al cambiar el input de búsqueda
  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // Obtiene el valor del input
    setText(value); // Actualiza el estado del texto
  };
  useEffect(() => {
    // Filtra los datos de personajes según el texto ingresado
    const filtrerData = data.filter((character) =>
      character.name.toLowerCase().includes(texto.toLowerCase())
    );
    setFilteredData(filtrerData); // Actualiza el estado de los datos filtrados
  }, [texto, data, setFilteredData]);

  return (
    <>
      <div className="w-full h-auto flex justify-center items-center mt-10 mb-4 px-4">
        <input
          value={texto}
          type="text"
          placeholder="Filtrar busqueda"
          className="rounded-full w-full max-w-[700px] h-[50px] pl-5"
          id="Filtro"
          onChange={search}
        />
      </div>
    </>
  );
};

export default FiltroBuqueda;
