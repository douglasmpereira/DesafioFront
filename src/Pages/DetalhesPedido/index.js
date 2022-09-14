import { useState, useEffect } from "react";
import Header from "../../Componentes/Haeder";
import useAxiosGet from "../../Componentes/hooks/useAxiosGet";
import TabelaItens from "../../Componentes/TabelaItens";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const DetalhesPedido = () => {

    const [pedidosItens, setPedidosItens] = useState([])
    const { tasks } = useAxiosGet('/pedidosItens')

    const idPedido = localStorage.getItem("idPedido")

    useEffect(() => {
        if (!tasks) return
        setPedidosItens(tasks.filter((filtrados)=> filtrados.pedido.id == idPedido))
    }, [tasks])

    
    return(
        <>
            <Header/>
            <h2 className="mt-3 text-center">ITENS DO PEDIDO {idPedido}</h2>
            <div className="container text-end">
                <div className="row">
                    <div className="col">
                        <Link to={"/telaAcesso"}>
                        <button className="btnBack mb-5">
                            <RiLogoutBoxFill/>
                            Voltar
                        </button>
                        </Link>
                    </div>
                </div>
        </div>
            <TabelaItens pedidosItens={pedidosItens} />
        </>
    )
}
export default DetalhesPedido;