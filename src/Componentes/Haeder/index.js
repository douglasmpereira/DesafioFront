import { Nav, Navbar, NavLink } from "react-bootstrap";
import { FaStore } from "react-icons/fa";
import { FcBusinesswoman } from "react-icons/fc";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";

const Header = () => {

  const { usuario } = useContext(AuthContext);
    useEffect(() => {
      console.log(usuario);
    }, [usuario]);


    return (
        <>
          <div className="header">
        <Navbar className="navbar ms-3">
          <Navbar.Brand href="/home">
            <FaStore className="iconeloja" size={30} />
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav>
          <label className="bem-vindo me-2">
            Bem vindo(a) novamente
             {/* {usuario.nome} */}
          </label>
          {/* <FcBusinesswoman className="me-3" size={25} /> */}
          <Nav.Link
            className="login btn  btn-outline-primary me-3"
            href="/login"
          >
            Logout{" "}
          </Nav.Link>
        </Navbar>
      </div>
        </>

    )
}
export default Header;