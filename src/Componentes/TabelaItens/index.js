import { useState } from "react";
import { useEffect } from "react";

const TabelaItens = ({pedidosItens}) => {


    return (
            <>
                <div className="container">
                 <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-center">Imagem</th>
                        <th className="text-center">Nome do Produto</th>
                        <th className="text-center">Preço Unitario</th>
                        <th className="text-center">Quantidade</th>
                        <th className="text-center">Subtotal</th>
                      </tr>
                    </thead>
                {pedidosItens.map((item) => (
                    <tbody key={item.id}>
                      <tr>
                        <td className="text-center"><img src={item.produto.url} alt="" width="60px" /></td>
                        <td className="text-center">{item.produto.nome} </td>
                        <td className="text-center"> {item.produto.precoUnit}</td>
                        <td className="text-center"> {item.quantidade} </td>
                        <td className="text-center"> {item.subTotal} </td>
                      </tr>
                    </tbody>
                    ))}
                  </table>
                </div>
                </div>
            </>
    )
}
export default TabelaItens