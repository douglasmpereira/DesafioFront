import e from "cors";
import CadastrarFornecedores from "../../Componentes/CadastroItens/CadastroFornecedores";
import Header from "../../Componentes/Haeder";
import CardFornecedor from "../CardFornecedor";
import { useState, useEffect } from 'react'
import api from '../service/api';
import useAxiosGet from '../hooks/useAxiosGet';
import "./styles.css";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Loading from "../Loading";





const Fornecedores = () =>{

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [cidade, setCidade] = useState("")
    const [endereco, setEndereco] = useState("")
    const [bairro, setBairro] = useState("")
    const [numero, setNumero] = useState("")
    const [fornecedores, setFornecedores]    = useState([])
    const { tasks } = useAxiosGet('/fornecedores')
    const [editando, setEditando] = useState({ edit: false, id: null })
    const [carregando, setCarregando] = useState(true)
    const [adicionarContatos, setAdicionarContatos] = useState(false)


    useEffect( () => {
           if (!tasks) return 
        setFornecedores(tasks)  
    }, [tasks])

    useEffect(() => {
        if (fornecedores.length > 0) {
            setCarregando(false);
        }
    }, [fornecedores])

    const adicionarFornecedor = async () => {
        if (nome === "" || descricao=== "" || cidade=== "" || bairro === "" ||
            endereco === "" || numero === "" ) {
            return alert("PREENCHA TODOS OS CAMPOS")
        }

        const novoFornecedor = {

            nome: nome,
            descricao: descricao,
            cidade: cidade,
            bairro: bairro,
            endereco: endereco,
            numero: numero

        }
        const { data } = await api.post('/fornecedores/adicionar', novoFornecedor)
        alert("FORNECEDOR CADASTRADO COM SUCESSO!")

        setAdicionarContatos(true);

        setFornecedores([
            ...fornecedores,
            data
        ])

        
        setNome("")
        setDescricao("")
        setCidade("")
        setBairro("")
        setEndereco("")
        setNumero("")
    }

    const editarFornecedor = (fornecedor) => {

        localStorage.setItem("idFornecedor", fornecedor.id)
    
        setEditando({ edit: true, id: fornecedor.id })
        setNome(fornecedor.nome)
        setDescricao(fornecedor.descricao)
        setCidade(fornecedor.cidade)
        setBairro(fornecedor.bairro)
        setEndereco(fornecedor.endereco)
        setNumero(fornecedor.numero)
    }
    const excluirFornecedor = async (id) => {
        const fornecedoresFiltrados = fornecedores.filter(fornecedor => fornecedor.id !== id)
        setFornecedores(fornecedoresFiltrados);
        alert("FORNECEDOR EXCLUÍDO COM SUCESSO!")
        const { data: fornecedorExcluido } = await api.delete(`/fornecedores/${id}`)
    }
    const cancelar = () => {
        setEditando({ edit: false, id: null })
        setNome("")
        setDescricao("")
        setCidade("")
        setBairro("")
        setEndereco("")
        setNumero("")
    }
    const salvar = async () => {
        const fornecedorEditado = {
            
            nome: nome,
            descricao: descricao,
            cidade: cidade,
            bairro: bairro,
            endereco: endereco,
            numero: numero
        }
        console.log(editando.id)
        console.log(fornecedorEditado.nome)
        const { data } = await api.put(`/fornecedores/${editando.id}`, fornecedorEditado)
        //console.log( editando.idProduto)
        const fornecedoreseditados = fornecedores.map(fornecedor => {
            console.log(fornecedor.id, data.id)
            if (fornecedor.id === editando.id) {
                
                return {
                    id: fornecedor.id,
                    ...fornecedorEditado
                }
            }
            return fornecedor
        })
        alert("FORNECEDOR EDITADO COM SUCESSO!")

        console.log("depois de produtos editads")
        setFornecedores(fornecedoreseditados)
        setEditando({ edit: false, id: null })
        setNome("")
        setDescricao("")
        setCidade("")
        setBairro("")
        setEndereco("")
        setNumero("")

    }

    return (
        <>
        <h2 className="mt-3 text-center">CADASTRE OU ALTERE UM FORNECEDOR</h2>
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
            <CadastrarFornecedores nome={nome} setNome={setNome} descricao={descricao} setDescricao={setDescricao} cidade={cidade} 
            setCidade={setCidade} endereco={endereco} setEndereco={setEndereco} bairro={bairro} setBairro={setBairro} numero={numero}
            setNumero={setNumero} adicionarContatos={adicionarContatos}
            editar={editarFornecedor} adicionarFornecedor={adicionarFornecedor} salvar={salvar} cancelar={cancelar} editando={editando}/>
            {carregando ? <> <Loading/> </> : <>
                {fornecedores.map((fornecedor) => <CardFornecedor key={fornecedor.id} fornecedor={fornecedor}
                editarFornecedor={editarFornecedor} excluirFornecedor={excluirFornecedor} />)} 
                </>}
        </div>
        </>
    )
}
export default Fornecedores;