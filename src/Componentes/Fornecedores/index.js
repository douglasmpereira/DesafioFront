import e from "cors";
import CadastrarFornecedores from "../../Componentes/CadastroItens/CadastroFornecedores";
import Header from "../../Componentes/Haeder";
import CardFornecedor from "../CardFornecedor";
import { useState, useEffect } from 'react'
import api from '../service/api';
import useAxiosGet from '../hooks/useAxiosGet';



const Fornecedores = () =>{

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [cidade, setCidade] = useState("")
    const [endereco, setEndereco] = useState("")
    const [bairro, setBairro] = useState("")
    const [numero, setNumero] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [fornecedores, setFornecedores]    = useState([])
    const { tasks } = useAxiosGet('/fornecedores')

    useEffect( () => {
        console.log("bateu aqui")
        if (!tasks) return 
        console.log(tasks)
        console.log("bateu aqui2")
        setFornecedores(tasks)  
    }, [tasks])



    return (
        <>
        <CadastrarFornecedores nome={nome} setNome={setNome} descricao={descricao} setDescricao={setDescricao} cidade={cidade} 
        setCidade={setCidade} endereco={endereco} setEndereco={setEndereco} bairro={bairro} setBairro={setBairro} numero={numero}
        setNumero={setNumero} email={email} setEmail={setEmail} telefone={telefone} setTelefone={setTelefone}/>
      
         {fornecedores.map((fornecedor) => <CardFornecedor key={fornecedor.id} fornecedor={fornecedor}  />)} 
        

        {/* editarFornecedor={editarFornecedor} excluirFornecedor={excluirFornecedor} */}
        
        </>
    )
}
export default Fornecedores;