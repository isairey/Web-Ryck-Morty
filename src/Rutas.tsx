import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FC } from "react";
import Presentacion from "./Pages/Presentacion/Presentacion";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

// Componente de Rutas que define las rutas de la aplicación

const Rutas: FC = () => {
  return (
    <Router basename="/Rick-Morty-Web">
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/Pages/Login" element={<Login />} />
        <Route path="/Pages/Home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Rutas;
