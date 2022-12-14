import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import User from "../Pages/user";
import Home from "../Pages/home";
import Login from "../Pages/login";
import TelaAcesso from "../Pages/telaAcesso";
import TelaFornecedores from "../Pages/telaFornecedor";
import TelaTransportadoras from "../Pages/telaTransportadoras";
import TelaPedidos from "../Pages/telaPedido";
import DetalhesPedido from "../Pages/DetalhesPedido";
import Contatos from "../Pages/Contatos";
import { AuthContext } from "../../src/contexts/auth";
//import ProtectedRoutes from "../ProtectedRoutes";

const Rotas = () => {
  const [usuario, setUsuario] = useState(null);

  const logar = (login, senha) => {
    setUsuario({ nome: "Mariazinha Silveira da Silva", senha });
  };

  const logout = () => {
  };

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{ authenticated: !!usuario, usuario, logar, logout }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/TelaAcesso" element={<TelaAcesso/>} />
          <Route path="/fornecedores" element={<TelaFornecedores/>} />
          <Route path="/transportadoras" element={<TelaTransportadoras/>} />
          <Route path="/pedidos" element={<TelaPedidos/>} />
          <Route path="/detalhesPedidos" element={<DetalhesPedido/>} />
          <Route path="/contatos" element={<Contatos/>} />
          {usuario && <Route path="/user" element={<User />} />}
          <Route
            path="*"
            element={usuario ? <User /> : <Navigate to="/login" />}
          />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default Rotas;
