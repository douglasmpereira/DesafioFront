import e from "cors";
import { useState } from "react";
import CadastrarFornecedores from "../../Componentes/CadastroItens/CadastroFornecedores";
import Header from "../../Componentes/Haeder";
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
        <CadastrarFornecedores nome={nome} setNome={setNome} descricao={descricao} setDescricao={setDescricao} cidade={cidade} 
        setCidade={setCidade} endereco={endereco} setEndereco={setEndereco} bairro={bairro} setBairro={setBairro} numero={numero}
        setNumero={setNumero} email={email} setEmail={setEmail} telefone={telefone} setTelefone={setTelefone}/>

        </>
    )
}
export default TelaFornecedores;