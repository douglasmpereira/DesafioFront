import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "./styles.css";
import { FaStore } from "react-icons/fa";
import desconto from "../../imagens/desconto.PNG"
import CardItem from "../../Componentes/CardItem";
import { RiLogoutBoxFill } from "react-icons/ri";   
import { Link } from "react-router-dom";
import Loading from "../../Componentes/Loading";
import useAxiosGet from "../../Componentes/hooks/useAxiosGet";
import { useEffect, useState } from "react";

const Home = () => {

  const { tasks } = useAxiosGet('/produtos')
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState("")

  useEffect(() => {
    if (!tasks) return
    setProdutos(tasks)
   // setIdProduto(tasks.length)
  }, [tasks])

  useEffect(() => {
    if (produtos.length > 0) {
        setCarregando(false);
    }
  }, [produtos])


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
           height="290px"
           />
           <div className="mt-2 ms-3">
            <h2>Nossos Produtos</h2>
           </div>
      <div className="container mb-4">
        <div className="body mt-4">
          <div className="row">
          {carregando ? <> <Loading/> </> : <>
          {produtos.map((produto) => <CardItem key={produto.id} produto={produto} />)} 
          </>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
