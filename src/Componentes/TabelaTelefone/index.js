
import { FaTrashAlt } from "react-icons/fa"; 

const TabelaTelefone = ({telefones, excluirTelefone}) => {
    return (
        <>

<div className="container">
                 <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center">DDD</th>
                        <th className="text-center">Telefone</th>
                        <th className="text-center">Deletar</th>
                      </tr>
                    </thead>
                
                {telefones.map((item) => (
                    <tbody key={item.id}>
                      <tr>
                        <td className="text-center">{item.ddd} </td>
                        <td className="text-center">{item.numero} </td>
                        <td className="text-center">
                          <button
                          type="button"
                          className="btn btn-TableEmail me-2"
                          onClick={()=> excluirTelefone(item.id)}><FaTrashAlt size={22}/></button>
                        </td>
                      </tr>
                    </tbody>
                    ))}
                  </table>
                </div>
                </div>
        </>
    )
}
export default TabelaTelefone;