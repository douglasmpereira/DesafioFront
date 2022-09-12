
const CadastrarProdutos = ({
  nome,
  setNome,
  custo,
  setCusto,
  preco,
  setPreco,
  descricao,
  setDescricao,
  quantidade,
  setQuantidade,
  categoria,
  setCategoria,
  adicionarProduto,
  editando,
  edit,
  cancelar,
  salvar,
}) => {
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
            <label className="form-label">Categoria</label>
            <select
              className="caixa form-select"
              value={categoria.idCategoria}
              onChange={(e) => setCategoria({ idCategoria: e.target.value })}>
              <option className = "boxselect" value="0" disabled selected>Insira uma Categoria</option>
              <option value="1">Smartphones</option>
              <option value="2">Tablets</option>
              <option value="3">Monitores</option>
              <option value="4">Mouses</option>
              <option value="5">Teclados</option>
            </select>
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
          <label className="form-label">Custo</label>
          <input
            type="number"
            className="form-control"
            placeholder="Ex: R$ 3000"
            value={custo}
            onChange={(e) => setCusto(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label">Preço Unitário</label>
          <input
            type="number"
            className="form-control"
            placeholder="Ex: R$ 6000"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Quantidade Estoque</label>
          <input
            type="number"
            className="form-control"
            placeholder="Ex: 25"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
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
