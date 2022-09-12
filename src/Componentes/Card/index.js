
const Card = ({ produto, editarProduto, excluirProduto }) => {
  const handleCategoria = () => {
    switch (produto.categoria.idCategoria) {
      case 1:
        return <>Smartphones</>;
      case 2:
        return <>Tablets</>;
      case 3:
        return <>Monitores</>;
      case 4:
        return <>Mouses</>;
      case 5:
        return <>Teclados</>;
      default:
        return "Sem Categoria";
    }
  };

  return (
    <div className="container">
      <div className="card col-12 mb-2 mt-4">
        <div className="card-header d-flex align-items-center">
          <div className="card col-12 mb-2 ">
            <div className="card-header d-flex align-items-center mt-2">
              <p>
                {produto.idProduto} - {produto.nomeProduto}
              </p>
            </div>

            <div className="card-body">
            
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-center">Categoria</th>
                      <th className="text-center">Descrição</th>
                      <th className="text-center">Custo</th>
                      <th className="text-center">Preço</th>
                      <th className="text-center">Quantidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">{handleCategoria()}</td>
                      <td className="text-center">
                        {produto.descricaoProduto}
                      </td>
                      <td className="text-center">R$ {produto.custo}</td>
                      <td className="text-center">
                        R$ {produto.precoUnitario}
                      </td>
                      <td className="text-center">
                        {produto.quantidadeEstoque}
                      </td>
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
                  onClick={() => excluirProduto(produto.idProduto)}
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
