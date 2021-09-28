import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPkByName } from '../actions';
import { useHistory, generatePath } from 'react-router-dom';




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
        console.log(e.target.value)
    }

    const buscarNombre = () => {

        let id = nombre[0].id;
        console.log(id)
        history.push(generatePath("/detalle/:id", { id }));
        
    }


    // useEffect(() => {
    //     dispatch(getPkByName(buscar))
    // }, [dispatch, buscar])


    return (
        <div className="main-busquedaNombre">

            <       div className="contenedor-input">
                <div className="search-input">
                    <input name="name" type="text" placeholder="Nombre Pokemon" onChange={handleOnChange} />
                </div>
                <div className="contenedor-boton">
                    <button onClick={buscarNombre}>Buscar Pokemon</button>

                    {/* <button onClick={buscarNombre}></button> */}

                    {/* <input type="button" onClick={buscarNombre} /> */}

                </div>

            </div>
            {/* <div className="content-search">
                    {
                        nombre ? nombre.map(el =>{
                            if(el.name.includes(buscar)){
                                return (
                                    <Link key={el.id} to={`/detalle/${el.id}`} >
                        <div key={el.id}>
                          {el.name}  
                        </div>
                        </Link>
                                    
                                )
                            } return null
                        }) : <div></div>
                    }
                </div> */}



        </div>

    )
}

export default NameSearch
