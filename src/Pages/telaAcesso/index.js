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
import Header from "../../Componentes/Haeder";

const TelaAcesso = () =>{

    const { usuario } = useContext(AuthContext);
    useEffect(() => {
    }, [usuario]);

    return(
        <>
         <Header/>
        <div className="container contAcesso ">
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