const CadastrarFornecedores = ({
    nome,
    setNome,
    descricao,
    setDescricao,
    cidade,
    setCidade,
    endereco,
    setEndereco,
    bairro,
    setBairro,
    numero,
    setNumero,
    email,
    setEmail,
    telefone,
    setTelefone,
    adicionarFornecedor,
    editando,
    edit,
    cancelar,
    salvar,
   
  }) => {
    return (
      <div className="container">
        <form className="row g-3 mt-2">
          <div className="col-md-3">
            <label className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: Iphone X"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Descrição</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: 126GB"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Email</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ex: 25"
              value={email.nomeEmail}
              onChange={(e) => setEmail({ nomeEmail: e.target.value })}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Telefone</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ex: 25"
              value={telefone.telefone}
              onChange={(e) => setTelefone({ telefone: e.target.value })}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Cidade</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ex: R$ 3000"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Bairro</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ex: 25"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Endereço</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ex: R$ 6000"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>
  
          
          <div className="col-md-2">
            <label className="form-label">Numero</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ex: 25"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
          
          
  
          {/* {editando.edit ? (
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
                onClick={adicionarFornecedor}
              >
                <div className="d-flex align-items-center">Adicionar</div>
              </button>
            </div>
          )} */}
        </form>
        <h4 className="subtitulo2">Produtos cadastrados no seu sistema!</h4>
      </div>
    );
  };
  
  export default CadastrarFornecedores;