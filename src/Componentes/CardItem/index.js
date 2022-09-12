import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import headset from "../../imagens/headset.PNG"

function CardItem() {
  return (
    <Card style={{ width: '11rem', borderRadius: '15px', boxShadow: '10px 10px 5px #0f7ae6'  }}>
      <Card.Img variant="top" src={headset} />
      <Card.Body>
        <Card.Title>HeadSet</Card.Title>
        <Card.Text>
          R$ 450, 00
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem