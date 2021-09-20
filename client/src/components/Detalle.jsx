import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getPokemonesById, quitPokemonesById } from '../actions';


const Detalle = () => {
    let { id } = useParams();

    const dispatch = useDispatch();
    const pokedetalle = useSelector(store => store.pokemon);

    useEffect(() => {
        dispatch(getPokemonesById(id))
        return () => { dispatch(quitPokemonesById()) }
    }, [dispatch, id])

    return (
        <div>
            {pokedetalle.name ?
                <div>
                    <br />
                    <h1>Detalle de {pokedetalle.name}</h1>
                    <img src={pokedetalle.image} alt={`imagen de ${pokedetalle.image}`} />
                    <p>Nombre: {pokedetalle.name}</p>
                    <p>Vida: {pokedetalle.hp}</p>
                    <p>Fuerza: {pokedetalle.strenght}</p>
                    <p>Defensa: {pokedetalle.defense}</p>
                    <p>Velocidad: {pokedetalle.speed}</p>
                    <p>Peso: {pokedetalle.weight}</p>
                    <p>Altura: {pokedetalle.height}</p>
                    {/* <p>Tipo: {pokedetalle.types.name}</p> */}
                </div>
                : "Loading..."
            }
        </div>
    )
}

export default Detalle
