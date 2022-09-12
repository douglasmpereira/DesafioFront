import "./styles.css"
const CardFornecedor = ({ fornecedor, editarFornecedor, excluirFornecedor}) => {
  
  // , 

    return (
      <div className="container contCardForn">
        <div className="card col-12 mb-2 mt-4">
          <div className="card-header d-flex align-items-center">
            <div className="card col-12 mb-2 ">
              <div className="card-header d-flex align-items-center mt-2">
                <p>
                  Código do fornecedor: {fornecedor.id}
                </p>
              </div>
  
              <div className="card-body">
              
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center">Nome</th>
                        <th className="text-center">Descrição</th>
                        <th className="text-center">Telefone</th>
                        <th className="text-center">E-mail</th>
                        <th className="text-center">Endereço Completo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">{fornecedor.nome}</td>
                        <td className="text-center">{fornecedor.descricao} </td>
                        <td className="text-center"> {fornecedor.telefone.ddd} {fornecedor.telefone.telefone}</td>
                        <td className="text-center"> {fornecedor.email.nomeEmail} </td>
                        <td className="text-center">
                          {fornecedor.cidade} {fornecedor.bairro} {fornecedor.endereco} {fornecedor.numero}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
  
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => editarFornecedor(fornecedor)}
                  >
                    <div className="d-flex align-items-center">Editar</div>
                  </button>
                  <button
                    className="btn btn-sm btn-danger ms-1"
                    onClick={() => excluirFornecedor(fornecedor.id)}
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
  
  export default CardFornecedor;