import CharactersApi from "../../Componentes/CharactersApi";
import FiltroBuqueda from "../../Componentes/Filtro/FiltroBuqueda";
import DataApi from "../../Componentes/Hooks/ApiContext";
import { useEffect, useState } from "react";
import { Character } from "../../Componentes/CharactersApi";
import FondoHom from "../../assets/FondoHom.jpg";
import SelectFiltro from "../../Componentes/Filtro/SelectFiltro";
import Git from "../../assets/Git.png";
import insta from "../../assets/insta.jpeg";
import Linke from "../../assets/Linke.png";
import titulorick from "../../assets/titulorick.png";
import ContentData from "./ContentData";
// Importación de opciones para el filtrado
import {
  statusOptions,
  speciesOptions,
} from "../../Componentes/Filtro/OptionsFiltered";

const Home: React.FC = () => {
  const [data, setData] = useState<Character[]>([]);
  const [filteredData, setFilteredData] = useState<Character[]>([]);

  // Efecto para inicializar filteredData con data

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <>
      {/* Usamos provedor del useContext para obtener los datos de la api */}
      <DataApi.Provider value={{ data, setData }}>
        <div
          style={{
            backgroundImage: `url(${FondoHom})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
          className="w-full h-full  ">
          {/* Header */}
          <header className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-x-2 justify-center">
              <img
                src={titulorick}
                alt="titulo"
                className="w-[250px] md:w-[300px] mx-auto md:mx-0"
              />
              <div className="flex flex-col md:flex-row items-center space-x-4 md:space-y-0 md:space-x-4">
                <FiltroBuqueda setFilteredData={setFilteredData} />
                <SelectFiltro
                  label="Status: "
                  options={statusOptions}
                  filterKey="status"
                  setFilteredData={setFilteredData}
                />
                <SelectFiltro
                  label="Species: "
                  options={speciesOptions}
                  filterKey="species"
                  setFilteredData={setFilteredData}
                />
              </div>
            </div>
          </header>
          {/* Main */}
          <main className="flex-grow">
            <ContentData charactersList={filteredData} />
          </main>
          {/* Footer */}
          <footer className="bg-[#000000] w-full h-[50px] mt-4 flex flex-col md:flex-row items-center justify-between p-2">
            <div className="flex space-x-2 md:space-x-4 justify-between w-full">
              <img src={Linke} alt="Linke" className="h-[30px] w-auto" />
              <img src={insta} alt="insta" className="h-[30px] w-auto" />
              <img src={Git} alt="Git" className="h-[30px] w-auto" />
              <p className="text-white mt-2 text-center text-[16px] md:text-[20px]">
                Creator: Wiicho_Dev
              </p>
              <img src={titulorick} alt="titulo" className="h-[30px] w-auto" />
            </div>
          </footer>
        </div>
        {/* Llamada del componente que carga los datos */}
        <CharactersApi />
      </DataApi.Provider>
    </>
  );
};

export default Home;
