import { useState, useEffect } from "react";
import api from "../service/api";
import useAxiosGet from "../hooks/useAxiosGet";
import Loading from "../Loading";
import TabelaTelefone from "../TabelaTelefone";
import {AiFillPlusCircle} from "react-icons/ai"; 

const Telefone = () => {

    const idFornecedor = localStorage.getItem("idFornecedor")

    const { tasks } = useAxiosGet(`/telefones/fornecedor/${idFornecedor}`)
    const [telefones, setTelefones] = useState([])
    const [ddd, setDdd] = useState("")
    const [numero, setNumero] = useState("")
    const [carregando, setCarregando] = useState(true)
    const [idFornec, setIdFornec] = useState({"id": idFornecedor})

    useEffect( () => {
        if (!tasks) return 
            setTelefones(tasks) 
    }, [tasks])

    useEffect(() => {
        if (telefones.length > 0) {
            setCarregando(false);
        }
    }, [telefones])

    const adicionarTelefone = async () => {
        if (numero === "" || ddd === "" ) {
            return alert("PREENCHA TODOS OS CAMPOS!")
        }
        
        const novoTelefone = {

            numero: numero,
            ddd: ddd,
            fornecedor: idFornec

        }
        const { data } = await api.post('/telefones/adicionar', novoTelefone)
        alert("TELEFONE CADASTRADO COM SUCESSO!")

        setTelefones([
            ...telefones,
            data
        ])

        setNumero("")
        setDdd("")
    }

    const excluirTelefone = async (id) => {
        const telefonesFiltrados = telefones.filter(telefone=> telefone.id!== id)
        setTelefones(telefonesFiltrados);
        alert("TELEFONE EXCLUÍDO COM SUCESSO!")
        
        const { data: telefoneExcluido } = await api.delete(`/telefones/${id}`)
    }

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <label className="form-label">DDD</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="22"
                    value={ddd}
                    onChange={(e) => setDdd(e.target.value)}
                    />
                </div>
                <div className="col-md-8">
                    <label className="form-label">Cadastrar Telefone</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="25648535"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    />
                </div>
                <div className="col-md-2 mt-2 ">
                    <br/>
                    <button
                    type="button"
                    className="btn btn-adcEmail me-2"
                    onClick={adicionarTelefone}><AiFillPlusCircle size={42}/></button>
                </div>
            </div>
        </div>
        {carregando ? (<Loading/>) : (
                      <TabelaTelefone telefones={telefones}  excluirTelefone={excluirTelefone} />
                 )}
        
        </>
    )
}
export default Telefone;