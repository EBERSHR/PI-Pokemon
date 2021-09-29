import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPkByName } from '../actions';
import { useHistory, generatePath } from 'react-router-dom';

import './namesearch.css';



function NameSearch() {

    const nombre = useSelector(state => state.idName);
    const history = useHistory();
    const dispatch = useDispatch();
    const [buscar, setBuscar] = useState({
        name: ""
    });

    const handleOnChange = (e) => {

        setBuscar(e.target.value)
        dispatch(getPkByName(buscar))
    }

    const buscarNombre = () => {

        let id = nombre[0].id;
        history.push(generatePath("/detalle/:id", { id }));

    }

    return (
        <div className="main-busquedaNombre">

            <div className="contenedor-input">
                <div className="search-input">
                    <input className="nameSearch" name="name" type="text" placeholder="Nombre Pokemon" onChange={handleOnChange} />
                    <button onClick={buscarNombre}>Buscar</button>
                </div>
            </div>
        </div>
    )
}

export default NameSearch
