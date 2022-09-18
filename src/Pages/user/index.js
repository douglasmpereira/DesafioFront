import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { FaStore } from "react-icons/fa";
import { FcBusinesswoman } from "react-icons/fc";
import Produto from "../../Componentes/Produto";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Componentes/Haeder";

 
const User = () => {
  
  const { usuario } = useContext(AuthContext);
  useEffect(() => {
    console.log(usuario);
  }, [usuario]);

  return (
    <>
        <Header/>
        <Produto />
      
    </>
  );
};
export default User;
