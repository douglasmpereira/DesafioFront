import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "./login.css";
import { FaStore } from "react-icons/fa";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/auth";
import Header from "../../Componentes/Haeder";

const user = {
  login: "Aluno",
  senha: "123",
};

const Login = () => {
  const { authenticated, logar } = useContext(AuthContext);

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    e.preventDefault();
      logar(login, senha);

    if (login === user.login && senha === user.senha) {
      localStorage.setItem("login", login);
      localStorage.setItem("senha", senha);
      // alert("Usuário validado")
      navigate("/telaAcesso");
    } else {
      alert("Usuário ou senha inválido! Tente novamente.");
    }
  };

  return (
    <>
     <Header/>
      <div className="container contLogin">
        <div className="body mt-4">
          <div className="row">
            <div className="col-md-4"></div>
           
            <div className="col-md-4 colLog ">
              <h3 className="text-center">Acesse com seu Email!</h3>
              <div className="btlogin">
                <div className="Auth-form-container">
                  <form className="Auth-form">
                    <div className="Auth-form-content">
                      <h2 className="Auth-form-title"></h2>
                      <div className="form-group">
                        <label>Login</label>
                        <input
                          type="text"
                          placeholder="Entre com o seu Id"
                          value={login}
                          onChange={(e) => setLogin(e.target.value)}
                        />
                      </div>
                      <div className="form-group mt-3">
                        <label>Senha</label>
                        <input
                          type="password"
                          placeholder="Entre com sua senha"
                          value={senha}
                          onChange={(e) => setSenha(e.target.value)}
                        />
                      </div>
                      <p>
                        <a className="ancoralog" href="#esquecisenha">
                          Esqueci minha senha
                        </a>
                      </p>
                      <p>
                        <a className="ancoralog" href="#cadastrar">
                          Ainda não tem cadastro?
                        </a>
                      </p>
                      <div className="d-grid gap-2 mt-3 mb-3">
                        <button
                          type="submit"
                          className="logbottom btn btn-primary"
                          onClick={handleEmail}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
