const CadastrarTransportadoras = ({nome, setNome, telefone, setTelefone,
    precoPorKm,
    setPrecoPorKm,
    adicionarTransportadora,
    editando,
    edit,
    cancelar,
    salvar,}) =>{
    return(
        <div className="container">
        <form className="row g-3 mt-2">
          <div className="col-md-5">
            <label className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: Transportes L.T.D.A"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Telefone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: 22 25658545"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Preço por Kilômetro</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex:  200"
              value={precoPorKm}
              onChange={(e) => setPrecoPorKm(e.target.value)}
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
                onClick={adicionarTransportadora}
              >
                <div className="d-flex align-items-center">Adicionar</div>
              </button>
            </div>
          )}

          </form>
          </div>
    )
}
export default CadastrarTransportadoras;