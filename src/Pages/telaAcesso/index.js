import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { FaStore } from "react-icons/fa";
import "./styles.css";
import { FcBusinesswoman } from "react-icons/fc";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import CardAcessos from "../../Componentes/CardAcessos";
import entrarProdutos from "../../imagens/entrarProdutos.PNG"
import entrarPedidos from "../../imagens/entrarPedidos.PNG"
import entrarFornecedores from "../../imagens/entrarFornecedores.PNG"
import entrarTransportadora from "../../imagens/entrarTransportadora.PNG"

const TelaAcesso = () =>{

    const { usuario } = useContext(AuthContext);
    useEffect(() => {
      console.log(usuario);
    }, [usuario]);

    return(
        <>
         <div className="header">
        <Navbar className="navbar ms-3">
          <Navbar.Brand href="/home">
            <FaStore className="iconeloja" size={30} />
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav>
          <label className="bem-vindo me-2" htmlFor="">
            Bem vindo(a) novamente, {usuario.nome}
          </label>
          <FcBusinesswoman className="me-3" size={25} />
          <Nav.Link
            className="login btn  btn-outline-primary me-3"
            href="/login"
          >
            Logout{" "}
          </Nav.Link>
        </Navbar>
      </div>
        <div className="container ">
            <div className="row rowNav">
                <div className="col-md-3 ">
                    <CardAcessos imagem={entrarProdutos} nome="Produtos" link="/user" />
                </div>
                <div className="col-md-3 ">
                    <CardAcessos imagem={entrarPedidos} nome="Pedidos" link="/pedidos" />
                </div>
                <div className="col-md-3">
                    <CardAcessos imagem={entrarFornecedores} nome="Fornecedores" link="/fornecedores" />
                </div>
                <div className="col-md-3">
                    <CardAcessos imagem={entrarTransportadora} nome="Transportadora" link="/transportadoras" />
                </div>
            </div>
            
        </div>
 
        </>
    )
}
export default TelaAcesso;