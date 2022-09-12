import entrarProdutos from "../../imagens/entrarProdutos.PNG"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";


const CardAcessos = ({nome, imagem, link})=> {

    return(
        <>
            <div className="container ">
                <div className="row">
                    <div className="col ">
                        
                        <Card.Title style={{fontSize:"25px"}} >{nome}</Card.Title>
                        <Card className="cardAcessos" style={{ width: '12rem', borderRadius: '15px', boxShadow: '10px 10px 5px #0f7ae6' }}>
                       <Link to={link}>
                        
                        <Card.Img  src={imagem} width="80%" height="190px"  /> 
                        </Link>
                        </Card>

                    </div>
                </div>
            </div>
        </>
    )
}
export default CardAcessos