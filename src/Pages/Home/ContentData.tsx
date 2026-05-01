import { useEffect, useState } from "react";
import { TarjetaBackground } from "../../Componentes/Fondos/TarjetaBackground";
import Modal from "../../Componentes/Modal/Modal";
import Paginado from "../../Componentes/Filtro/Paginado";

// Tipado de caracteres

type Character = {
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
type CharacterList = {
  charactersList: Character[];
};
const ContentData: React.FC<CharacterList> = ({ charactersList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40;

  const LastItem = currentPage * itemsPerPage;
  const FirstItem = LastItem - itemsPerPage;
  const currentItems = charactersList.slice(FirstItem, LastItem);

  // Apertura de modal
  const openModal = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };
  // Clausura de modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  // Verificación de datos
  useEffect(() => {
    if (selectedCharacter) {
      console.log(selectedCharacter);
    }
  }, [selectedCharacter]);

  // Paginación

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="w-full h-auto px-4 md:px-10">
      <Paginado
        itemsPerPage={itemsPerPage}
        totalItems={charactersList.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      {/* Creacion de arrays para los personajes envuelto en componente TarjetaBackground*/}
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {currentItems.map((datos, index) => (
          <TarjetaBackground key={index} species={datos.species}>
            <li className="text-white list-none text-[16px] w-full h-auto flex flex-col items-center space-y-2">
              <img
                src={datos.image}
                alt={datos.name}
                className="w-full max-w-[200px] object-contain cursor-pointer"
                onClick={() => openModal(datos)}
              />

              <div className="h-auto w-full space-y-1 text-center">
                <span className="block">Nombre: {datos.name} </span>
                <span className="block">Status: {datos.status} </span>
                <span className="block">Species: {datos.species} </span>
              </div>
            </li>
          </TarjetaBackground>
        ))}
      </ul>
      {/* Insercion del modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        species={selectedCharacter?.species}>
        {selectedCharacter && (
          <>
            <img
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
              className="w-[300px] object-contain"
            />
            <span>Nombre: {selectedCharacter.name}</span>
            <span>Genero: {selectedCharacter.gender}</span>
            <span>Origen: {selectedCharacter.origin.name}</span>
            <ul>
              Episodios:{" "}
              {selectedCharacter.episode.map((Epi, index) => (
                <li key={index}>{Epi}</li>
              ))}
            </ul>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ContentData;
