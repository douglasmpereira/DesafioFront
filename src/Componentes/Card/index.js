import { useState } from "react";
import { useEffect } from "react";
import api from "../service/api";
import useAxiosGet from "../hooks/useAxiosGet";

const Card = ({ produto, editarProduto, excluirProduto }) => {

  const [fornecedor, setFornecedor] = useState("")
  const { tasks } = useAxiosGet(`/fornecedores/${produto.fornecedor}`)

  useEffect(() => {
    if (!tasks) return
    setFornecedor(tasks)
    console.log("fornecedor", tasks)
}, [tasks])

  return (
    <div className="container">
      <div className="card col-12 mb-2 mt-4">
        <div className="card-header d-flex align-items-center">
          <div className="card col-12 mb-2 ">
            <div className="card-header d-flex align-items-center mt-2">
              <p>
                 Produto: {produto.nome} - Código: {produto.id}
              </p>
            </div>

            <div className="card-body">
            
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-center"></th>
                      <th className="text-center">Descrição</th>
                      <th className="text-center">Fornecedor</th>
                      <th className="text-center">Preço Unitário</th>
                      <th className="text-center">Quantidade em Estoque</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td className="text-center"> <img src={produto.url} alt="imagem do produto" width="70px" /></td>
                      <td className="text-center"> {produto.descricao} </td>
                      <td className="text-center">{fornecedor.nome}</td>
                      <td className="text-center">R$ {produto.precoUnit}</td>
                      <td className="text-center"> {produto.qtdEstoque} </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => editarProduto(produto)}
                >
                  <div className="d-flex align-items-center">Editar</div>
                </button>
                <button
                  className="btn btn-sm btn-danger ms-1"
                  onClick={() => excluirProduto(produto.id)}
                >
                  <div className="d-flex align-items-center">Excluir</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
