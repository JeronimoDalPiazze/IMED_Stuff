import React, { useState, useEffect } from "react";
import Services from "../../services/user.service";



export default function Teste() {

    const [teste, setTeste] = useState('');

    useEffect(() => {
        getTeste();
    }, []);


    const getTeste = () => {
        Services.getTestRoute()
            .then((response) => {
                setTeste(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };


    return (
        <div>
            <p>Teste de rota</p>
            <p>{teste.title}</p>
        </div>
    )
}
