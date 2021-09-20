import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { getPokemones } from '../actions';
import './Pokemon.css';
import { NavLink } from 'react-router-dom';


function Pokemon() {

    const selector = useSelector(state => state.pokemones)
    // const dispatch = useDispatch();
    const limite = 9;
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(limite);
    const [paginado, setPaginado] = useState([]);


    // useEffect(() => {
    //     dispatch(getPokemones())
    // }, [dispatch])



    const pagination = () => {
        setPaginado(
            selector.slice(page, limit)
        )
        console.log(paginado);
    }

    const handleBackwards = () => {

            setPage(page - limite)
            setLimit(limit - limite)
            if (page < 0 && limit < limite) {
                setPage(0);
                setLimit(limite);
                }
            pagination();
        console.log(page, limit)
    }

    const handleForewards = () => {
        if (limit < selector.length) {
            setPage(limit)
            setLimit(limit + limite)
        }
        pagination();
    }

    if (!pagination) {
        console.log('no hay nada')
        pagination();

    }

    return (
        <>
            <div>
                <input type="button" value="<<<" onClick={handleBackwards} />
                <input type="button" value=">>>" onClick={handleForewards} />
            </div>
            <div className="main-card">

                {paginado.map((e, i) => {
                    return (
                        <div key={i} className="individual">
                            <NavLink exact to={`/detalle/${e.id}`}>
                                <img className="poketImage" src={e.image} alt={`imagen ${e.name}`} />
                            </NavLink>
                            <h2>Nombre: {e.name}</h2>
                            {/* <h3>Tipo: {e.types}</h3> */}
                        </div>
                    )
                })}
            </div>
        </>

    )
}

export default Pokemon
