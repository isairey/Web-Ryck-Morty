import React, { useState, useContext, useEffect } from "react";
import { Character } from "../CharactersApi";
import DataApi from "../Hooks/ApiContext";

// Tipado de caracteres

type OptionSelected = {
  value: string;
  label: string;
};

type SelectFiltro = {
  label: string;
  options: OptionSelected[];
  setFilteredData: (data: Character[]) => void;
  filterKey: keyof Character;
};

const SelectFiltro: React.FC<SelectFiltro> = ({
  label,
  options,
  setFilteredData,
  filterKey,
}) => {
  //Control de estados
  const [option, setOption] = useState<string>("");
  const { data } = useContext(DataApi) || { data: [] };

  // Función para manejar el cambio de selección
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value);
    console.log("Opción seleccionada:", event.target.value);
  };

  useEffect(() => {
    // Filtra los datos de los personajes según la opción seleccionada
    const filtrerData = data.filter((character) => {
      const characterValue = character[filterKey];
      // Verifica si el valor del personaje es una cadena y lo compara con la opción seleccionada
      if (typeof characterValue == "string") {
        return characterValue.includes(option);
      }
      return false; // Retorna false si el valor no es una cadena
    });

    // Actualiza el estado de los datos filtrados
    setFilteredData(filtrerData);
  }, [option, data, setFilteredData, filterKey]);

  return (
    <div className="flex items-center ">
      <label className="text-white mr-2" htmlFor={`select-${label}`}>
        {label}
      </label>
      <select
        id={`select-${label}`}
        value={option}
        onChange={handleSelectChange}
        className=" text-black rounded px-3 py-2 mb-2 md:mb-0">
        <option value="">All</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFiltro;
