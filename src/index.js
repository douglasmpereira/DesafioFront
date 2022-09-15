import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaExclamationTriangle } from "react-icons/fa"; 
import Rotas from './Routes';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Rotas/>

    <div className="footer py-3  ">
      <div className="container ">
            <div className="row ">
              <div className="col d-flex justify-content-start ">
                <a href="">
                  <BsFacebook className = "ancora me-2" size={20}  />
                </a>
                <a href="">
                  <RiInstagramFill className = "ancora me-2" size={20} />
                </a>
                <a href="">
                  <BsLinkedin className = "ancora me-2" size={20} />
                </a>
              </div>
              <div className="rodape col d-flex justify-content-end ">
                <a className = "ancora me-2" href="Esta com problemas? fale con">
                <FaExclamationTriangle className="me-2"/>
                  Esta tendo problemas com nosso sistema?
                  
                </a>
                </div>
              
            </div>
          </div>
        </div>
  </React.StrictMode>
  
);


