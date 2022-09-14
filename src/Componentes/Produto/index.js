import { useState, useEffect } from 'react'
import api from '../service/api';
import useAxiosGet from '../hooks/useAxiosGet';
import CadastrarProdutos from '../CadastroItens/CadastrarProduto';
import Card from '../Card';
import { RiLogoutBoxFill } from "react-icons/ri";   
import { Link } from "react-router-dom";
import Loading from "../Loading";


const Produto = () => {
    const [nome, setNome] = useState("")
    const [url, setUrl] = useState("")
    const [precoUnit, setPrecoUnit] = useState("")
    const [descricao, setDescricao] = useState("")
    const [qtdEstoque, setQtdEstoque] = useState("")
    const [fornecedor, setFornecedor] = useState({"id": ""})
    const [editando, setEditando] = useState({ edit: false, id: null })
    const { tasks } = useAxiosGet('/produtos')
    const [produtos, setProdutos] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        if (!tasks) return
        setProdutos(tasks)
       // setIdProduto(tasks.length)
    }, [tasks])

    const adicionarProduto = async () => {
        if (nome === "" || precoUnit === "" || descricao === "" ||
         qtdEstoque === "" || url === " " || fornecedor ===" " ) {
            return alert("PREENCHA TODOS OS CAMPOS")
        }

        const novoProduto = {

            nome: nome,
            url: url,
            precoUnit: precoUnit,
            descricao: descricao,
            qtdEstoque: qtdEstoque,
            fornecedor: fornecedor

        }
        alert("PRODUTO CADASTRADO COM SUCESSO!")
        const { data } = await api.post('/produtos', novoProduto)

        setProdutos([
            ...produtos,
            data
        ])

        setNome("")
        setUrl("")
        setPrecoUnit("")
        setDescricao("")
        setQtdEstoque("")
        setFornecedor({"id": ""  })
    }

    const editarProduto = (produto) => {
        setEditando({ edit: true, idProduto: produto.idProduto })
        setNome(produto.nome)
        setUrl(produto.url)
        setPrecoUnit(produto.precoUnit)
        setDescricao(produto.descricao)
        setQtdEstoque(produto.qtdEstoque)
        setFornecedor(produto.fornecedor)
    }
    
    const excluirProduto = async (id) => {
        const produtosFiltrados = produtos.filter(produto => produto.id!== id)
        setProdutos(produtosFiltrados);
        alert("PRODUTO EXCLUÍDO COM SUCESSO!")
        console.log("problema de back end, culpa do pessoal que fez a api")
        const { data: produtoExcluido } = await api.delete(`/produtos/${id}`)
    }

    const cancelar = () => {
        setEditando({ edit: false, idProduto: null })
        setNome("")
        setUrl("")
        setPrecoUnit("")
        setDescricao("")
        setQtdEstoque("")
        setFornecedor({"id": ""  })
    }

    

    
    const salvar = async () => {
        const produtoEditado = {

            nome: nome,
            url: url,
            precoUnit: precoUnit,
            descricao: descricao,
            qtdEstoque: qtdEstoque,
            fornecedor: fornecedor
        }

        const { data } = await api.put(`/produtos/${editando.id}`, produtoEditado)
        //console.log( editando.idProduto)
        const produtoseditados = produtos.map(produto => {
            console.log(produto.id, data.id)
            if (produto.id === editando.id) {
                
                return {
                    id: produto.id,
                    ...produtoEditado
                }
            }
            return produto
        })
        
        console.log("depois de produtos editads")
        setProdutos(produtoseditados)
        setEditando({ edit: false, id: null })
        setNome("")
        setUrl("")
        setPrecoUnit("")
        setDescricao("")
        setQtdEstoque("")
        setFornecedor({"id": ""  })

    }

    useEffect(() => {
        if (produtos.length > 0) {
            setCarregando(false);
        }
    }, [produtos])

    return (
        <div className="container">
            
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

                <CadastrarProdutos editar={editarProduto} adicionarProduto={adicionarProduto} salvar={salvar} cancelar={cancelar} 
                nome={nome} setNome={setNome} url={url} setUrl={setUrl} precoUnit={precoUnit} setPrecoUnit={setPrecoUnit}  descricao={descricao} 
                setDescricao={setDescricao} qtdEstoque={qtdEstoque} setQtdEstoque={setQtdEstoque} fornecedor={fornecedor}
                setFornecedor={setFornecedor} editando={editando}/>
             {carregando ? <> <Loading/> </> : <>
                 {produtos.map((produto) => <Card key={produto.idProduto} produto={produto} editarProduto={editarProduto} excluirProduto={excluirProduto} />)}
            </>}
        </div>
    );
}

export default Produto;