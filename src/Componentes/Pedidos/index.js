import e from "cors";
import CardPedidos from "../CardPedido";
import { useState, useEffect } from 'react'
import api from '../service/api';
import useAxiosGet from '../hooks/useAxiosGet';
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const Pedidos = () => {

    const [pedidos, setPedidos]    = useState([])
    const { tasks } = useAxiosGet('/pedidos')
    const [carregando, setCarregando] = useState(true)

    useEffect( () => {
        if (!tasks) return 
        setPedidos(tasks) 
    }, [tasks])

    useEffect(() => {
        if (pedidos.length > 0) {
            setCarregando(false);
        }
    }, [pedidos])
    


    const excluirPedido = async (id) => {
        const pedidosFiltrados = pedidos.filter(pedido => pedido.id !== id)
        setPedidos(pedidosFiltrados);
        alert("PEDIDO EXCLUÍDO COM SUCESSO!")
        const { data: pedidoExcluido } = await api.delete(`/pedidos/${id}`)
    }


    return(
        <>
        <h2 className="mt-3 text-center">PEDIDOS NO SISTEMA</h2>
        <div className="container text-end">
            <div className="row">
                <div className="col">
                    <Link to={"/telaAcesso"}>
                    <button className="btnBack">
                        <RiLogoutBoxFill/>
                        Voltar
                    </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="mb-4">
        {carregando ? <> <Loading/> </> : <>
            {pedidos.map((pedido) => <CardPedidos key={pedido.id} pedido={pedido} excluirPedido={excluirPedido} />)} 
        </>}
        </div>
            </>
    )
}
export default Pedidos