const CadastrarTransportadora = ({nome, setNome, telefone, setTelefone, precoPorKm, setPrecoPorKm}) =>{
    return(
        <div className="container">
        <form className="row g-3 mt-2">
          <div className="col-md-3">
            <label className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: Transportes L.T.D.A"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Telefone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: 22 25658545"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Preço por Kilômetro</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: R$ 200"
              value={"R$"+precoPorKm}
              onChange={(e) => setPrecoPorKm(e.target.value)}
            />
          </div>
          </form>
          </div>
    )
}
export default CadastrarTransportadora;