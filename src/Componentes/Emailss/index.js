import { useState, useEffect } from "react";
import api from "../service/api";
import useAxiosGet from "../hooks/useAxiosGet";
import Loading from "../Loading";
import TabelaEmail from "../TabelaEmail";
import "./styles.css";
import {AiFillPlusCircle} from "react-icons/ai"; 



const Email = () => {

    const idFornecedor = localStorage.getItem("idFornecedor")

    const { tasks } = useAxiosGet(`/emails/fornecedor/${idFornecedor}`)
    const [emails, setEmails] = useState([])
    const [email, setEmail] = useState("")
    const [carregando, setCarregando] = useState(true)
    const [idFornec, setIdFornec] = useState({"id": idFornecedor})

    useEffect( () => {
        if (!tasks) return 
            setEmails(tasks) 
    }, [tasks])

    useEffect(() => {
        if (emails.length > 0) {
            setCarregando(false);
        }
    }, [emails])

    const adicionarEmail = async () => {
        if (email === "" ) {
            return alert("PREENCHA O CAMPO EMAIL")
        }
        
        const novoEmail = {

            email: email,
            fornecedor: idFornec

        }
        const { data } = await api.post('/emails/adicionar', novoEmail)
        alert("EMAIL CADASTRADO COM SUCESSO!")

        setEmails([
            ...emails,
            data
        ])

        setEmail("")
    }

    const excluirEmail = async (id) => {
        const emailsFiltrados = emails.filter(email=> email.id!== id)
        setEmails(emailsFiltrados);
        alert("EMAIL EXCLUÍDO COM SUCESSO!")
        
        const { data: produtoExcluido } = await api.delete(`/emails/${id}`)
    }

 
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <label className="form-label">Cadastrar Email</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="fornecedor@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-md-2 mt-1 ">
                    <br/>
                    <button
                    type="button"
                    className="btn btn-adcEmail me-2"
                    onClick={adicionarEmail}><AiFillPlusCircle size={42}/></button>
                </div>
            </div>
        </div>
        {carregando ? (<Loading/>) : (
                      <TabelaEmail emails={emails} excluirEmail={excluirEmail} />
                 )}
        
        </>
    )
}
export default Email;