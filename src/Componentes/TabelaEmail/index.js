import "./styles.css";
import { FaTrashAlt } from "react-icons/fa"; 

const TabelaEmail = ({emails, excluirEmail}) => {
    return (
        
        <>
                <div className="container">
                 <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center">E-mail</th>
                        <th className="text-center">Deletar</th>
                        
                      </tr>
                    </thead>
                
                {emails.map((item) => (
                    <tbody key={item.id}>
                      <tr>
                        <td className="text-center">{item.email} </td>
                        <td className="text-center">
                          <button
                          type="button"
                          className="btn btn-TableEmail me-2"
                          onClick={()=> excluirEmail(item.id)}><FaTrashAlt size={22}/></button>
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
export default TabelaEmail;