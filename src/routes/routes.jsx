import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../Clientes/Empresa/Cadastro";
import Login from '../Clientes/Empresa/login'
import Agendamento from "../Clientes/Empresa/Agendamento";
import Contato from "../Clientes/Empresa/Contato/contato";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
        <Route path="/Agendamento" element={<Agendamento />} />
        <Route path="/contato" element={<Contato />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
