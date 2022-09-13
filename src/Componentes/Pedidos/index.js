import e from "cors";
import CardPedidos from "../CardPedido";
import { useState, useEffect } from 'react'
import api from '../service/api';
import useAxiosGet from '../hooks/useAxiosGet';
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Pedidos = () => {

    const [pedidos, setPedidos]    = useState([])
    const { tasks } = useAxiosGet('/pedidos')

    useEffect( () => {
        if (!tasks) return 
        setPedidos(tasks)  
    }, [tasks])

    const excluirPedido = async (id) => {
        const pedidosFiltrados = pedidos.filter(pedido => pedido.id !== id)
        setPedidos(pedidosFiltrados);
        alert("PEDIDO EXCLUÍDO COM SUCESSO!")
        const { data: pedidoExcluido } = await api.delete(`/pedidos/${id}`)
    }


    return(
        <>
        <h2 className="mt-3 text-center">PEDIDOS ENCONTRADOS NO SISTEMA</h2>
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

        {pedidos.map((pedido) => <CardPedidos key={pedido.id} pedido={pedido} excluirPedido={excluirPedido} />)} 
        </>
    )
}
export default Pedidos