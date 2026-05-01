import React from "react";

type PaginadoProps = {
  itemsPerPage: number; // Número de elementos por página
  totalItems: number; // Total de elementos a paginar
  paginate: (pageNumber: number) => void; // Función para cambiar de página
  currentPage: number; // Página actual
};

const Paginado: React.FC<PaginadoProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  // Cálculo de páginas
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i); // Agrega el número de página al array
  }
  return (
    <nav className="flex flex-col items-center my-5">
      <span className=" text-white mb-2">
        Página {currentPage} de {pageNumbers.length}
      </span>
      <ul className="pagination flex flex-wrap justify-center space-x-2 ">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item mb-2">
            <button
              onClick={() => paginate(number)}
              className={`page-link bg-white hover:bg-green-200 text-black px-4 py-2 rounded ${
                currentPage === number ? "bg-green-200" : ""
              }`}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginado;
