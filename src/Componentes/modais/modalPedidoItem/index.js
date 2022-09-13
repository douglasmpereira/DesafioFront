import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalItensPedidos = ({pedido}) => {

    const [pedidosItens, setPedidosItens] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = () => {
        setShow(true);
        const idUser = localStorage.getItem("id_user")          
            //   getByIdUsuario(idUser).then((response)=>{
            //   setUser(response)
            //   })      

      }

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
                    <tbody>
                      {/* <tr>
                        <td className="text-center">{produto.url}</td>
                        <td className="text-center">{produto.nome} </td>
                        <td className="text-center"> {produto.precoUnit}</td>
                        <td className="text-center"> {quantidade} </td>
                        <td className="text-center"> {valor} </td>
                      </tr> */}
                    </tbody>
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