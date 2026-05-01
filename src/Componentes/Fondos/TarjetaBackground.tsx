import backgroundReducer, { initialState } from "../Hooks/BackgroundReducer";
import { useReducer, useEffect, ReactNode } from "react";

type Props = {
  species: string;
  children: ReactNode;
};

export const TarjetaBackground: React.FC<Props> = ({ species, children }) => {
  const [state, dispatch] = useReducer(backgroundReducer, initialState);

  useEffect(() => {
    dispatch({ type: "setCondition", payload: { species } });
  }, [species]);

  return (
    <div
      style={state.style}
      className="max-w-[200px] h-[370px] rounded-b-3xl space-y-2 border">
      {children}
    </div>
  );
};
