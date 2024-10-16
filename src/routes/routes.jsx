import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../Clientes/Empresa/Cadastro";
import Login from '../Clientes/Empresa/login'


function AppRoutes(){

    return(
        <BrowserRouter>
        <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<Login />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;