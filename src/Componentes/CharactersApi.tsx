import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import DataApi from "./Hooks/ApiContext";
import Loader from "./Fondos/Loader";
import ErrorFondo from "./Fondos/ErrorFondo";
// import ContentData from "../Pages/Home/ContentData";

// Tipado de caracteres

export type Character = {
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
  origin: {
    name: string;
  };
  episode: string[];
};

type apiResponse = {
  info: { count: number; pages: number; next: string; prev: string };
  results: Character[];
};

const CharactersApi: React.FC = () => {
  // Control de Estados

  const [error, setError] = useState<string | null>(null);
  const { setData } = useContext(DataApi);
  const [loading, setLoading] = useState(true);
  let url: string | null = "https://rickandmortyapi.com/api/character";

  // Función para obtener datos y manejar errores

  useEffect(() => {
    const dataRec = async () => {
      try {
        let allCharacters: Character[] = [];

        // Funcion while, obtiene los datos de todas las paginas de la API

        while (url) {
          const response = await axios.get<apiResponse>(url);
          allCharacters = [...allCharacters, ...response.data.results];
          url = response.data.info.next;
        }
        setData(allCharacters);
      } catch (error) {
        //Control de errores
        console.error("Error de conexion", error);
        setError("Error");
        setError("Error de Conexion");
      } finally {
        setLoading(false);
      }
    };
    // Simulacion de conexion
    const time = setTimeout(() => {
      dataRec();
    }, 2000);

    return () => clearTimeout(time);
  }, [setData]); // Agregado setData como dependencia

  // Muestra el loader de carga
  if (loading) {
    return <Loader />;
  }

  // Borrar una letra de la URL para probar la vista del Error
  if (error) {
    return <ErrorFondo error={error} />;
  }

  return null;
};

export default CharactersApi;
