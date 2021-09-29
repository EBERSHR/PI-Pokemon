import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getPokemonesById, quitPokemonesById } from '../actions';

import './detalle.css';


function Detalle() {

    let { id } = useParams();

    const dispatch = useDispatch();
    const pokedetalle = useSelector(store => store.pokemon);

    useEffect(() => {
        dispatch(getPokemonesById(id))
        return () => { dispatch(quitPokemonesById()) }
    }, [dispatch, id])


    return (
        <div className="detailComponent">
            {pokedetalle.name ?
                <div className="detail">
                    <br />
                    <h1>Detalle de {pokedetalle.name}</h1>
                    <div className="detaliRow">
                        <div>
                        <img className="imageDetail" src={pokedetalle.image} alt={`imagen de ${pokedetalle.name}`} />
                        </div>
                        <div>
                        <p>Nombre: {pokedetalle.name}</p>
                    <p>Vida: {pokedetalle.hp}</p>
                    <p>Fuerza: {pokedetalle.strenght}</p>
                    <p>Defensa: {pokedetalle.defense}</p>
                    <p>Velocidad: {pokedetalle.speed}</p>
                    <p>Peso: {pokedetalle.weight}</p>
                    <p>Altura: {pokedetalle.height}</p>
                        </div>
                    </div> 
                    <div> {typeof pokedetalle.types === "object" ?
                        <div>Tipo: {
                            pokedetalle.types.map((element, index) => {
                                return <h3 key={index}> {element.name} </h3>
                            })}
                        </div>
                        : <h3>Tipo: {pokedetalle.types}</h3>}</div>
                </div>
                : "Cargando..."
            }
        </div>
    )
}

export default Detalle
