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





const Fornecedores = () =>{

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [cidade, setCidade] = useState("")
    const [endereco, setEndereco] = useState("")
    const [bairro, setBairro] = useState("")
    const [numero, setNumero] = useState("")
    const [email, setEmail] = useState({"email": " "})
    const [telefone, setTelefone] = useState({"ddd": "", "telefone": ""})
    const [fornecedores, setFornecedores]    = useState([])
    const { tasks } = useAxiosGet('/fornecedores')
    const [editando, setEditando] = useState({ edit: false, id: null })

    useEffect( () => {
        console.log("bateu aqui")
        if (!tasks) return 
        console.log(tasks)
        console.log("bateu aqui2")
        setFornecedores(tasks)  
    }, [tasks])

    const adicionarFornecedor = async () => {
        if (nome === "" || descricao=== "" || email=== null ||
            telefone === null || cidade=== "" || bairro === "" ||
            endereco === "" || numero === "" ) {
            return alert("PREENCHA TODOS OS CAMPOS")
        }

        const novoFornecedor = {

            nome: nome,
            descricao: descricao,
            email: email,
            telefone: telefone,
            cidade: cidade,
            bairro: bairro,
            endereco: endereco,
            numero: numero

        }
        alert("FORNECEDOR CADASTRADO COM SUCESSO!")
        const { data } = await api.post('/fornecedores', novoFornecedor)

        setFornecedores([
            ...fornecedores,
            data
        ])

        
        setNome("")
        setDescricao("")
        setEmail({"email": ""})
        setTelefone({"ddd": "", "telefone":""})
        setCidade("")
        setBairro("")
        setEndereco("")
        setNumero("")
    }

    const editarFornecedor = (fornecedor) => {
        console.log("nome",fornecedor.nome)
        console.log("id",fornecedor.id)
        setEditando({ edit: true, id: fornecedor.id })
        setNome(fornecedor.nome)
        setDescricao(fornecedor.descricao)
        setEmail(fornecedor.email)
        setTelefone(fornecedor.telefone)
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
        setEditando({ edit: false, idProduto: null })
        setNome("")
        setDescricao("")
        setEmail({"email": ""})
        setTelefone({"ddd": "", "telefone":""})
        setCidade("")
        setBairro("")
        setEndereco("")
        setNumero("")
    }
    const salvar = async () => {
        const fornecedorEditado = {
            
            nome: nome,
            descricao: descricao,
            email: email,
            telefone: telefone,
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

        console.log("depois de produtos editads")
        setFornecedores(fornecedoreseditados)
        setEditando({ edit: false, id: null })
        setNome("")
        setDescricao("")
        setEmail({"email": ""})
        setTelefone({"ddd": "", "telefone":""})
        setCidade("")
        setBairro("")
        setEndereco("")
        setNumero("")

    }

    return (
        <>
        <h2 className="mt-3 text-center">Cadastre ou edite um fornecedor</h2>
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
        <CadastrarFornecedores nome={nome} setNome={setNome} descricao={descricao} setDescricao={setDescricao} cidade={cidade} 
        setCidade={setCidade} endereco={endereco} setEndereco={setEndereco} bairro={bairro} setBairro={setBairro} numero={numero}
        setNumero={setNumero} email={email} setEmail={setEmail} telefone={telefone} setTelefone={setTelefone}
        editar={editarFornecedor} adicionarFornecedor={adicionarFornecedor} salvar={salvar} cancelar={cancelar} editando={editando}/>
      
         {fornecedores.map((fornecedor) => <CardFornecedor key={fornecedor.id} fornecedor={fornecedor} editarFornecedor={editarFornecedor} excluirFornecedor={excluirFornecedor} />)} 
        

        
        
        </>
    )
}
export default Fornecedores;