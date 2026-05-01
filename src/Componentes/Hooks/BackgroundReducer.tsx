// Definición del estado inicial y su estructura
type State = {
  style: { backgroundColor: string }; // Propiedad para el estilo de fondo
};
// Definición de las acciones posibles
type Action =
  | { type: "setColor"; payload: string } // Acción para establecer un color de fondo específico
  | { type: "setCondition"; payload: { species: string } }; // Acción para establecer el color según la especie

export const initialState: State = { style: { backgroundColor: "" } };

// Reducer para gestionar el estado del color de fondo
export default function backgroundReducer(state: State, action: Action): State {
  switch (action.type) {
    case "setColor":
      // Cambia el color de fondo a un color específico
      return { style: { backgroundColor: action.payload } };

    case "setCondition":
      // Establece el color de fondo basado en la especie
      if (action.payload.species === "Human") {
        return { style: { backgroundColor: "green" } };
      } else if (action.payload.species === "Alien") {
        return { style: { backgroundColor: "#4E3ACA" } };
      } else if (action.payload.species === "Humanoid") {
        return { style: { backgroundColor: "brown" } };
      } else if (action.payload.species === "Animal") {
        return { style: { backgroundColor: "purple" } };
      } else if (action.payload.species === "unknown") {
        return { style: { backgroundColor: "red" } };
      } else if (action.payload.species === "Robot") {
        return { style: { backgroundColor: "grey" } };
      } else {
        // Color por defecto si la especie no coincide con ninguna condición
        return { style: { backgroundColor: "orange" } };
      }
    default:
      // Retorna el estado actual si no hay una acción reconocida
      return state;
  }
}
