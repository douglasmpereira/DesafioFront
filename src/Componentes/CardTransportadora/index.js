const CardTransportadora = ({ transportadora, editarTransportadora, excluirTransportadora}) => {
    return(
        <div className="container contCardForn">
        <div className="card col-12 mb-2 mt-4">
          <div className="card-header d-flex align-items-center">
            <div className="card col-12 mb-2 ">
              <div className="card-header d-flex align-items-center mt-2">
                <p>
                  Código de Identificação da Tranportadora: {transportadora.id}
                </p>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center">Nome</th>
                        <th className="text-center">Telefone</th>
                        <th className="text-center">Preço por Kilômetro</th>  
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">{transportadora.nome}</td>
                        <td className="text-center"> {transportadora.telefone}</td>
                        <td className="text-center">{transportadora.precoPorKm} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => editarTransportadora(transportadora)}
                  >
                    <div className="d-flex align-items-center">Editar</div>
                  </button>
                  <button
                    className="btn btn-sm btn-danger ms-1"
                    onClick={() => excluirTransportadora(transportadora.id)}
                  >
                    <div className="d-flex align-items-center">Excluir</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default CardTransportadora;