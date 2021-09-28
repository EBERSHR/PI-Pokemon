import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemones, setFilters } from '../actions';
import './Pokemon.css';
import { NavLink, useHistory } from 'react-router-dom';
import NameSearch from './NameSearch';


function Pokemon() {

    const dispatch = useDispatch();
    const history = useHistory();
    let existentes = [];
    let creados = [];
    let asendentes = [];
    let descendentes = [];
    let fuerza = [];

    useEffect(() => {
        dispatch(getPokemones())
    }, [dispatch]);

    const selector = useSelector(state => state.pokemones)

    const [datos, setDatos] = useState(-1);
    const [mapeo, setMapeo] = useState(selector);
    const limite = 9;
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(limite);
    const [paginado, setPaginado] = useState([]);

    // selector.forEach(element => {
    //     if (typeof element.id === 'string') {
    //         existentes.push(element);
    //     } else {
    //         creados.push(element);
    //     }
    // });



    const pagination = () => {
        setPaginado(
            selector.slice(page, limit)
        )

    }

    const handleBackwards = () => {
        setPage(page - limite)
        setLimit(limit - limite)
        if (page < 0 && limit < limite) {
            setPage(0);
            setLimit(limite);
        }
        pagination();
    }

    const handleForewards = () => {
        if (limit < selector.length) {
            setPage(limit)
            setLimit(limit + limite)
        }
        pagination();

    }

    if (!pagination) {
        pagination();

    }



    const handleFilterChange = (e) => {
        console.log('en el switch', e.target.value)

        switch (e.target.value) {
            // Filtrar Asendente
            case "1":

                selector.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                });

                dispatch(setFilters(selector))
                setPaginado(
                    selector.slice(0, 9)
                )
                history.push('/home');

                // console.log('en el switch')
                // let a = paginado;
                // setPaginado([]);

                // a.sort((a, b) => {
                //     if (a.name < b.name) return -1;
                //     if (a.name > b.name) return 1;
                //     return 0;
                // });

                // console.log(a);
                // setPaginado(a);
                // history.push('/home');
                break;
            // Filtar Descendente    
            case "2":

                selector.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                });

                console.log("Descendentes:", selector);
                dispatch(setFilters(selector))
                setPaginado(
                    selector.slice(0, 9)
                )
                // let d = paginado;
                // setPaginado([]);
                // d.sort((a, b) => {
                //     if (a.name < b.name) return 1;
                //     if (a.name > b.name) return -1;
                //     return 0;
                // });
                // setPaginado(d);
                // // history.push('/home');
                break;
                // Filtrar por Fuerza
            case "3":


                selector.sort((a, b) => {
                    if (a.strenght < b.strenght) return -1;
                    if (a.strenght > b.strenght) return 1;
                    return 0;
                });

                console.log("Fuerza:", selector);
                dispatch(setFilters(selector))
                setPaginado(
                    selector.slice(0, 9)
                )
                // let f = paginado;
                // setPaginado([]);
                // f.sort((a, b) => {
                //     if (a.strenght < b.strenght) return -1;
                //     if (a.strenght > b.strenght) return 1;
                //     return 0;
                // });
                // setPaginado(f);
                // history.push('/home');
                break;
            // Filtrar por Pokemones Existentes    
            case "4":
                dispatch(getPokemones())
                selector.forEach(element => {
                    if (typeof element.id === 'string') {
                        existentes.push(element);
                    } else {
                        creados.push(element);
                    }
                });
                console.log("Creados:", existentes);
                dispatch(setFilters(existentes))
                break;
            // Filtrar por Pokemones Creados
            case "5":
                dispatch(getPokemones())
                selector.forEach(element => {
                    if (typeof element.id === 'string') {
                        existentes.push(element);
                    } else {
                        creados.push(element);
                    }
                });
                console.log("Existentes:", creados);
                dispatch(setFilters(creados))
                history.push('/home');
                break;
            // Todos lo Pokemones
            case 6:
                dispatch(getPokemones())
                setPaginado(
                    selector.slice(0, 9)
                )
                break;

            default:
                break;
        }
    }

    return (
        <div className="main-card">


            <div className="button-pagination">
                <input className="back" type="button" value="<<<" onClick={handleBackwards} />
                <input className="forward" type="button" value=">>>" onClick={handleForewards} />
            </div>
            <NameSearch />

            <select onChange={e => { handleFilterChange(e) }}>
                <option value={-1}>Selecciòn de Filtros</option>
                <option value={1} >Ordenar Asendente</option>
                <option value={2} >Ordenar Descendente</option>
                <option value={3} >Filtrar por Fuerza</option>
                <option value={4} >Pokemones Existentes</option>
                <option value={5} >Nuevo Pokemones Creados</option>
                <option value={6} >Todos los Pokemones</option>
            </select>
            <div className="container-pokemones">
                {


                    paginado.map((e, i) => {
                        if (typeof e.types === "object") {
                            return (
                                <div key={i} className="imagenes-card">
                                    <NavLink exact to={`/detalle/${e.id}`}>
                                        <img src={e.image} alt={`imagen ${e.name}`} />
                                    </NavLink>
                                    <h2>Nombre: {e.name}</h2>
                                    <div>Tipo : {
                                        e.types.map((element, index) => {
                                            return <h3 key={index}>{element.name}</h3>
                                        })
                                    }</div>
                                </div>
                            )
                        } else {
                            return (
                                <div key={i} className="imagenes-card">
                                    <NavLink exact to={`/detalle/${e.id}`}>
                                        <img src={e.image} alt={`imagen ${e.name}`} />
                                    </NavLink>
                                    <h2>Nombre: {e.name}</h2>
                                    <h3>Tipo : {e.types}</h3>
                                </div>
                            )
                        }
                    })}
            </div>
        </div>
    )
}

export default Pokemon
