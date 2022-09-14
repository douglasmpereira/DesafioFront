import { useState, useEffect } from 'react'
import useAxiosGet from '../../hooks/useAxiosGet';

const CadastrarProdutos = ({
  nome,
  setNome,
  url,
  setUrl,
  precoUnit,
  setPrecoUnit,
  descricao,
  setDescricao,
  qtdEstoque,
  setQtdEstoque,
  fornecedor,
  setFornecedor,
  adicionarProduto,
  editando,
  edit,
  cancelar,
  salvar
}) => {
  const { tasks } = useAxiosGet('/produtos')
  const [fornecedores, setFornecedores] = useState([])

  useEffect(() => {
    if (!tasks) return
    setFornecedores(tasks)
   // setIdProduto(tasks.length)
}, [tasks])

  console.log(fornecedores)

  return (
    <div className="container">
      <form className="row g-3 mt-2">
        <div className="col-md-4">
          <label className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: Iphone X"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Descrição</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: 126GB"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>
        <div className="col-md-4">
            <label className="form-label">Fornecedor</label><br/>
            <select
                className="caixa form-select" required
                value={fornecedor.id}
                onChange={(e)=>{setFornecedor(e.target.value)}}>
                <option className = "boxselect" value="" disabled selected>Fornecedor</option>
                {fornecedores.map(person => <option  key={person.id} className = "boxselect" value={person.id}>{person.nome}</option>)}
              </select>
          </div>
        <div className="col-md-4">
          <label className="form-label">Url da imagem</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ex: http://loremflickr.com/640/480"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Preço Unitário</label>
          <input
            type="number"
            className="form-control"
            placeholder="Ex: 300"
            value={precoUnit}
            onChange={(e) => setPrecoUnit(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Quantidade Estoque</label>
          <input
            type="number"
            className="form-control"
            placeholder="Ex: 25"
            value={qtdEstoque}
            onChange={(e) => setQtdEstoque(e.target.value)}
          />
        </div>

        {editando.edit ? (
          <div className="col-12 mt-4 mb-4">
            <button
              type="button"
              className="btn btn-danger me-2"
              onClick={cancelar}
            >
              Cancelar
            </button>
            <button type="button" className="btn btn-success" onClick={salvar}>
              Salvar
            </button>
          </div>
        ) : (
          <div className="col-12 mt-4 mb-4">
            <button
              type="button"
              className="btn btn-success"
              onClick={adicionarProduto}
            >
              <div className="d-flex align-items-center">Adicionar</div>
            </button>
          </div>
        )}
      </form>
      <h4 className="subtitulo2">Produtos cadastrados no seu sistema!</h4>
    </div>
  );
};

export default CadastrarProdutos;
