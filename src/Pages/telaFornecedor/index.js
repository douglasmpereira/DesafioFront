import e from "cors";
import { useState } from "react";
import CadastrarFornecedores from "../../Componentes/CadastroItens/CadastroFornecedores";
import Header from "../../Componentes/Haeder";
import Fornecedores from "../../Componentes/Fornecedores";
const TelaFornecedores = () =>{

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [cidade, setCidade] = useState("")
    const [endereco, setEndereco] = useState("")
    const [bairro, setBairro] = useState("")
    const [numero, setNumero] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [fornecedores, setFornecedores]    = useState("")



    return (
        <>
        <Header/>
        <Fornecedores/>
        </>
    )
}
export default TelaFornecedores;