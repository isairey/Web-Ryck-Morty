import { createContext } from "react";
import { Character } from "../CharactersApi";

// Valor inicial para el contexto
const ValorPrede: DataContext = {
  data: [], // Array inicial de personajes
  setData: () => {}, // Función vacía como marcador
};
// Definición de la estructura del contexto
type DataContext = {
  data: Character[]; // Array de personajes
  setData: React.Dispatch<React.SetStateAction<Character[]>>; // Función para actualizar el estado de personajes
};

// Creación del contexto con el valor inicial
const DataApi = createContext<DataContext>(ValorPrede);
export default DataApi;
