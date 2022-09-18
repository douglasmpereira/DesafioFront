import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import headset from "../../imagens/headset.PNG";
import Loading from '../Loading';

function CardItem({produto}) {

  return (
    <div className="col-md-2 mb-4">
    <Card style={{ width: '11rem', borderRadius: '15px', boxShadow: '10px 10px 5px   rgb(15 122 230 / 75%)'  }}>  
        <Card.Img variant="top" src={produto.url}  width= '18rem' style={{height: "140px"}} />
      <Card.Body>
        <Card.Title>{produto.nome}</Card.Title>
        <Card.Text>
         R$ {produto.precoUnit},00
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardItem