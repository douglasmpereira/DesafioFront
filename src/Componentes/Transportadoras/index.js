import e from "cors";
import CadastrarTransportadoras from "../../Componentes/CadastroItens/CadastroFornecedores";
import { useState, useEffect } from 'react'
import api from '../service/api';
import useAxiosGet from '../hooks/useAxiosGet';
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Transportadoras = () => {
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [precoPorKm, setPrecoPorKm] = useState("")


    return (
            <CadastrarTransportadoras nome={nome} setNome={setNome} telefone={telefone} setTelefone={setTelefone}
            precoPorKm={precoPorKm} setPrecoPorKm={setPrecoPorKm}/>
    )
}
export default Transportadoras