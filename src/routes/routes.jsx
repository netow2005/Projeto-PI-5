import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../Clientes/Empresa/Cadastro";


function AppRoutes(){

    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Cadastro />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;