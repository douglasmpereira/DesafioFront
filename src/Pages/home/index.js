import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "./styles.css";
import { FaStore } from "react-icons/fa";
import desconto from "../../imagens/desconto.PNG"
import CardItem from "../../Componentes/CardItem";

const Home = () => {
  return (
    <>
      <div className="header">
        <Navbar className="navbar ms-3">
          <Navbar.Brand href="/home">
            <FaStore className="iconeloja" size={35} />
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link className="home" href="/home">
              Home
            </Nav.Link>
          </Nav>
          <Nav.Link
            className="login btn  btn-outline-primary me-3"
            href="/login"
          >
            Login{" "}
          </Nav.Link>
        </Navbar>
      </div>
      <img src={desconto} alt="garoto vibrando por ter ganhado um jogo" 
           
           width="100%"
           height="180px"
           />
           <div className="mt-2 ms-3">
            <p>Nossos Produtos</p>
           </div>
      <div className="container mb-4">
        <div className="body mt-4">
          <div className="row">
            <div className="col-md-2">
              <CardItem/>
            </div>
            <div className="col-md-2">
              <CardItem/>
            </div>
            <div className="col-md-2">
              <CardItem/>
            </div>
            <div className="col-md-2">
              <CardItem/>
            </div>
            <div className="col-md-2">
              <CardItem/>
            </div>
            <div className="col-md-2">
              <CardItem/>
            </div>
            
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
