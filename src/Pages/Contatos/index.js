import Header from "../../Componentes/Haeder";
import Email from "../../Componentes/Emailss";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Telefone from "../../Componentes/Telefone";

const Contatos = () => {
    return (
        <>
        <Header/>
        <h2 className="mt-3 text-center">CONTATOS</h2>
        <div className="container text-end">
            <div className="row">
                <div className="col">
                    <Link to={"/fornecedores"}>
                    <button className="btnBack">
                        <RiLogoutBoxFill/>
                        Voltar
                    </button>
                    </Link>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Email/>
                </div>
                <div className="col-md-6">
                    <Telefone/>
                </div>
            </div>
        </div>
       
        </>
    )
}
export default Contatos;