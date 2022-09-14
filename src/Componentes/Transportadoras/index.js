import e from "cors";
import CadastrarTransportadoras from "../CadastroItens/CadastroTransportadoras";
import { useState, useEffect } from 'react'
import api from '../service/api';
import useAxiosGet from '../hooks/useAxiosGet';
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CardTransportadora from "../CardTransportadora";
import Loading from "../Loading";

const Transportadoras = () => {

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [precoPorKm, setPrecoPorKm] = useState("")
    const [transportadoras, setTransportadoras] = useState([])
    const { tasks } = useAxiosGet('/transportadoras')
    const [editando, setEditando] = useState({ edit: false, id: null })
    const [carregando, setCarregando] = useState(true)

    useEffect( () => {
        
        if (!tasks) return 
        setTransportadoras(tasks)  
    }, [tasks])

    useEffect(() => {
        if (transportadoras.length > 0) {
            setCarregando(false);
        }
    }, [transportadoras])

    const adicionarTransportadora = async () => {
        if (nome === "" || telefone=== "" || precoPorKm=== "" ) 
        {
            return alert("PREENCHA TODOS OS CAMPOS")
        }

        const novaTransportadora = {

            nome: nome,
            telefone: telefone,
            precoPorkm: precoPorKm

        }
        alert("TRANSPORTADORA CADASTRADA COM SUCESSO!")
        const { data } = await api.post('/transportadoras', novaTransportadora)

        setTransportadoras([
            ...transportadoras,
            data
        ])
        setNome("")
        setTelefone("")
        setPrecoPorKm("")
        
    }
    const editarTransportadora = (transportadora) => {
        
        setEditando({ edit: true, id: transportadora.id })
        setNome(transportadora.nome)
        setTelefone(transportadora.telefone)
        setPrecoPorKm(transportadora.precoPorKm)
        
    }
    const excluirTransportadora = async (id) => {
        const transportadorasFiltrados = transportadoras.filter(transportadora => transportadora.id !== id)
        setTransportadoras(transportadorasFiltrados);
        alert("TRANSPORTADORA EXCLUÍDA COM SUCESSO!")
        const { data: transportadoraExcluida } = await api.delete(`/transportadoras/${id}`)
    }
    const cancelar = () => {
        setEditando({ edit: false, id: null })
        setNome("")
        setTelefone("")
        setPrecoPorKm("")
    }
    const salvar = async () => {
        
        const transportadoraEditada = {
            
            nome: nome,
            telefone: telefone,
            precoPorKm: precoPorKm
        }
        
        const { data } = await api.put(`/transportadoras/${editando.id}`, transportadoraEditada)
        //console.log( editando.idProduto)
        alert("EDIÇÃO CONCLUÍDA COM SUCESSO!")
        const transportadorasEditadas = transportadoras.map(transportadora => {
            
            if (transportadora.id === editando.id) {
                
                return {
                    id: transportadora.id,
                    ...transportadoraEditada
                }
            }
            return transportadora
        })

        setTransportadoras(transportadorasEditadas)
        setEditando({ edit: false, id: null })
        setNome("")
        setTelefone("")
        setPrecoPorKm("")

    }

    
    return (
        <>
        <h2 className="mt-3 text-center">CADASTRE OU EDITE UMA TRANSPORTADORA</h2>
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
            <CadastrarTransportadoras nome={nome} setNome={setNome} telefone={telefone} setTelefone={setTelefone}
            precoPorKm={precoPorKm} setPrecoPorKm={setPrecoPorKm}  editar={editarTransportadora} 
            adicionarTransportadora={adicionarTransportadora} salvar={salvar} cancelar={cancelar} editando={editando}/>
            {carregando ? <> <Loading/> </> : <>
                {transportadoras.map((transportadora) => <CardTransportadora key={transportadora.id} transportadora={transportadora} 
                editarTransportadora={editarTransportadora} excluirTransportadora={excluirTransportadora} />)}
            </>}

        </>
    )
}
export default Transportadoras