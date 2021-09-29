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


    useEffect(() => {
        dispatch(getPokemones())
    }, [dispatch]);

    const selector = useSelector(state => state.pokemones)

    const limite = 9;
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(limite);
    const [paginado, setPaginado] = useState([]);

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
                break;

            // Filtar Descendente    
            case "2":
                selector.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                });
                dispatch(setFilters(selector))
                setPaginado(
                    selector.slice(0, 9)
                )
                break;
                // Filtrar por Fuerza

                case "3":
                selector.sort((a, b) => {
                    if (a.strenght < b.strenght) return -1;
                    if (a.strenght > b.strenght) return 1;
                    return 0;
                });
                dispatch(setFilters(selector))
                setPaginado(
                    selector.slice(0, 9)
                )
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
                <input className="navButton" type="button" value="<<<" onClick={handleBackwards} />
                <input className="navButton" type="button" value=">>>" onClick={handleForewards} />
                <NameSearch />
                <select className="selector" onChange={e => { handleFilterChange(e) }}>
                <option value={-1}>Selecciòn de Filtros</option>
                <option value={1} >Ordenar Asendente</option>
                <option value={2} >Ordenar Descendente</option>
                <option value={3} >Filtrar por Fuerza</option>
                <option value={4} >Pokemones Existentes</option>
                <option value={5} >Nuevo Pokemones Creados</option>
                <option value={6} >Todos los Pokemones</option>
            </select>
            </div>


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
