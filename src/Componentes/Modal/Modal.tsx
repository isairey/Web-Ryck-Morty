import React from "react";
import { useReducer, useEffect } from "react";
import backgroundReducer, { initialState } from "../Hooks/BackgroundReducer";

type ModalProps = {
  isOpen: boolean; // Indica si el modal está abierto
  onClose: () => void; // Función para cerrar el modal
  children: React.ReactNode; // Contenido del modal
  species?: string; // Especie opcional para establecer el color de fondo
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  species,
}) => {
  const [state, dispatch] = useReducer(backgroundReducer, initialState); // Uso del reducer para manejar el estado de fondo

  useEffect(() => {
    if (species) {
      dispatch({ type: "setCondition", payload: { species } });
    } else {
      dispatch({ type: "setCondition", payload: { species: "unknown" } }); // Valor por defecto
    }
  }, [species]);

  if (!isOpen) return null; // No renderiza si el modal no está abierto
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}>
      <div
        style={state.style}
        className="w-[400px] h-[700px] rounded-3xl shadow-lg p-4 flex flex-col items-center  overflow-x-hidden text-white space-y-3 text-[18px]"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="bg-green-700 hover:bg-green-800 text-white p-2 rounded mb-4">
          Cerrar
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
