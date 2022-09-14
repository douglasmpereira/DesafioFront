import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';

const Loading = ({ type, num, erro, setErro }) => {

    if (type == "table" && num.length == 0) {
        setErro(true);
        return (
            <div style={{ textAlign: "center", marginTop: "100px" }}>
                {erro && <h2 style={{ color: "#56cdd1" }}>Marque uma consulta</h2>}
            </div>
        )
    } else if (type == "table" && num > 0) {
        setErro(false);
        return (
            <div style={{ textAlign: "center", width: "100%", height: "100%" }}>
                <Spinner animation="border" variant="info" style={{ width: "100px", height: "100px" }} />
            </div>
        )
    } else {
        return (
            <div style={{ textAlign: "center", width: "100%", height: "100%" }}>
                <h2>Carregando Lista...</h2>
                <Spinner animation="border" variant="info" style={{ width: "150px", height: "150px" }} />
            </div>
        )
    }
}

export default Loading;