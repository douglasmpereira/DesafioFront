import { useState, useEffect } from 'react'
import api from '../service/api';
import useAxiosGet from '../hooks/useAxiosGet';
import CadastrarProdutos from '../CadastrarProduto';
import Card from '../Card';


const Produto = () => {
    const [nomeProduto, setNomeProduto] = useState("")
    const [custo, setCusto] = useState("")
    const [precoUnitario, setPrecoUnitario] = useState("")
    const [descricaoProduto, setDescricaoProduto] = useState("")
    const [quantidadeEstoque, setQuantidadeEstoque] = useState("")
    const [categoria, setCategoria] = useState({ "idCategoria": 0 })
    const [idProduto, setIdProduto] = useState(0)
    const [editando, setEditando] = useState({ edit: false, id: null })
    const { tasks } = useAxiosGet('/produtos')
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        if (!tasks) return
        setProdutos(tasks)  
    }, [tasks])

    const adicionarProduto = async () => {
        if (nomeProduto === "" || custo === "" || precoUnitario === "" ||
            descricaoProduto === "" || quantidadeEstoque === "" || categoria === null) {
            return alert("PREENCHA TODOS OS CAMPOS")
        }

        const novoProduto = {

            nomeProduto: nomeProduto,
            custo: custo,
            precoUnitario: precoUnitario,
            descricaoProduto: descricaoProduto,
            quantidadeEstoque: quantidadeEstoque,
            categoria: categoria

        }
        alert("PRODUTO CADASTRADO COM SUCESSO!")
        const { data } = await api.post('/produtos/adicionar', novoProduto)

        setProdutos([
            ...produtos,
            data
        ])

        setIdProduto("")
        setNomeProduto("")
        setCusto("")
        setPrecoUnitario("")
        setDescricaoProduto("")
        setQuantidadeEstoque("")
        setCategoria({"idCategoria": 0  })
    }

    const editarProduto = (produto) => {
        setEditando({ edit: true, idProduto: produto.idProduto })
        setNomeProduto(produto.nomeProduto)
        setCusto(produto.custo)
        setPrecoUnitario(produto.precoUnitario)
        setDescricaoProduto(produto.descricaoProduto)
        setQuantidadeEstoque(produto.quantidadeEstoque)
        setCategoria(produto.categoria)
    }
    
    const excluirProduto = async (idProduto) => {
        const produtosFiltrados = produtos.filter(produto => produto.idProduto !== idProduto)
        setProdutos(produtosFiltrados);
        alert("PRODUTO EXCLUÍDO COM SUCESSO!")
        console.log("problema de back end, culpa do pessoal que fez a api")
        const { data: produtoExcluido } = await api.delete(`/produtos/${idProduto}`)
    }

    const cancelar = () => {
        setEditando({ edit: false, idProduto: null })
        setNomeProduto("")
        setCusto("")
        setPrecoUnitario("")
        setDescricaoProduto("")
        setQuantidadeEstoque("")
        setCategoria({ "idCategoria": 0  })
    }

    const salvar = async () => {
        const produtoEditado = {
            nomeProduto: nomeProduto,
            custo: custo,
            precoUnitario: precoUnitario,
            descricaoProduto: descricaoProduto,
            quantidadeEstoque: quantidadeEstoque,
            categoria: categoria
        }

        const { data } = await api.put(`/produtos/${editando.idProduto}`, produtoEditado)
        //console.log( editando.idProduto)
        const produtoseditados = produtos.map(produto => {
            console.log(produto.idProduto, data.idProduto)
            if (produto.idProduto === editando.idProduto) {
                
                return {
                    idProduto: produto.idProduto,
                    ...produtoEditado
                }
            }
            return produto
        })
        
        console.log("depois de produtos editads")
        setProdutos(produtoseditados)
        setEditando({ edit: false, idProduto: null })
        setNomeProduto("")
        setCusto("")
        setPrecoUnitario("")
        setDescricaoProduto("")
        setQuantidadeEstoque("")
        setCategoria({ "idCategoria": 0  })

    }

    return (
        <div className="container">
            <h1 className='titulo text-center'>GERENCIAMENTO DE PRODUTOS</h1>

            <CadastrarProdutos editar={editarProduto} adicionarProduto={adicionarProduto} salvar={salvar} cancelar={cancelar} nome={nomeProduto} setNome={setNomeProduto} custo={custo} setCusto={setCusto}
                preco={precoUnitario} setPreco={setPrecoUnitario} descricao={descricaoProduto} setDescricao={setDescricaoProduto}
                quantidade={quantidadeEstoque} setQuantidade={setQuantidadeEstoque} categoria={categoria} setCategoria={setCategoria} editando={editando} />

            {produtos.map((produto) => <Card key={produto.idProduto} produto={produto} editarProduto={editarProduto} excluirProduto={excluirProduto} />)}
        </div>
    );
}

export default Produto;