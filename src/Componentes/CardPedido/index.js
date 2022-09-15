import ModalItensPedidos from "../modais/modalPedidoItem";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardPedidos = ({pedido, excluirPedido, pedidosItens}) => {

    const pegarIdPedido = () =>{
      localStorage.setItem("idPedido", pedido.id);
    }
    return (
        <div className="container contCardForn">
        <div className="card col-12 mb-2 mt-4">
          <div className="card-header d-flex align-items-center">
            <div className="card col-12 mb-2 ">
              <div className="card-header d-flex align-items-center mt-2">
                <p>
                  Numero do Pedido: {pedido.id}
                </p>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center">Nome do Cliente</th>
                        <th className="text-center">Data Emissão</th>
                        <th className="text-center">N° da Nota Fiscal</th>
                        <th className="text-center">Transportadora</th>
                        <th className="text-center">Frete</th>
                        <th className="text-center">Desconto</th>
                        <th className="text-center">Valor do Pedido</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">{pedido.cliente.nome}</td>
                        <td className="text-center">{pedido.dataHora} </td>
                        <td className="text-center"> {pedido.notaFiscal}</td>
                        <td className="text-center"> {pedido.transportadora.nome} </td>
                        <td className="text-center">R$ {pedido.frete},00 </td>
                        <td className="text-center">R$ {pedido.desconto},00 </td>
                        <td className="text-center">R$ {pedido.valorTotal},00 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
  
                <div className="d-flex justify-content-end">
                  {/* <ModalItensPedidos pedido={pedido}/> */}
                  <Link to={"/detalhesPedidos"}>
                  <button
                    className="btn btn-sm btn-primary ms-1"
                    onClick={() => pegarIdPedido()}
                  >
                    <div className="d-flex align-items-center">Itens</div>
                  </button>
                  </Link>
                  <button
                    className="btn btn-sm btn-danger ms-1"
                    onClick={() => excluirPedido(pedido.id)}
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
export default CardPedidos