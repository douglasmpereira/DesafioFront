import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useAxiosGet from '../../hooks/useAxiosGet';

const ModalItensPedidos = ({pedido}) => {

    const [pedidosItens, setPedidosItens] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const { tasks } = useAxiosGet('/pedidosItens')

    

    useEffect( () => {
    if(!show){
        console.log("chegou no modal")
      if (!tasks) return 
      setPedidosItens(tasks) 
      console.log("tasks:",tasks)
      console.log("fez a requisição") 
    }
  }, [tasks])

    const handleShow = () => {
        setShow(true);  
        console.log(pedidosItensFiltrados)   
        console.log(pedido.id) 
      }

    
    const pedidosItensFiltrados = pedidosItens.filter(
        
        (filtrados) => filtrados.pedido.id === pedido.id   
    );

    return (

        <>
        <Button className='btnAgendar' onClick={handleShow}>
         Itens
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header  className='headerModal' closeButton>
            <Modal.Title className='title-modal'>Itens do Pedido</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-teste'>
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
                {pedidosItensFiltrados.map((item) => (
                    <tbody key={item.id}>
                      <tr>
                        <td className="text-center">{item.produto.url}</td>
                        <td className="text-center">{item.produto.nome} </td>
                        <td className="text-center"> {item.produto.precoUnit}</td>
                        <td className="text-center"> {item.quantidade} </td>
                        <td className="text-center"> {item.subTotal} </td>
                      </tr>
                    </tbody>
                    ))}
                  </table>
                </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className='btn-cancelar' onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
         
        </Modal>
      </>
    )
}
export default ModalItensPedidos