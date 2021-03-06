import axios from 'axios';

export const GET_POKEMONES = 'GET_POKEMONES';
export const GET_POKEMONES_BY_ID = 'GET_POKEMONES_BY_ID';
export const QUIT_POKEMONES_BY_ID = 'QUIT_POKEMONES_BY_ID';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';

export const CREA_NEW_TYPE = 'CREA_NEW_TYPE'; 
export const JOIN_POKEMON = 'JOIN_POKEMON';
export const SET_FILTERS = 'SET_FILTERS';
export const GET_PK_BY_NAME = 'GET_PK_BY_NAME';

export function getPkByName(name) {
    return async dispatch => {
        return await axios.get(`http://localhost:3001/pokemons/searchName?name=${name}`)
        .then(response => dispatch({
            type: GET_PK_BY_NAME,
            payload: response.data
        }))
    }
    
}

export const setFilters = (payload) => {
    return {
        type: SET_FILTERS,
        payload: payload
    }
}

export const joinPokemon = (payload) => {
    return {
        type: JOIN_POKEMON,
        payload: payload
    }
}

export const creaNewType = (payload) => {
    return (dispatch) => {
        axios.post("http://localhost:3001/types/add", payload)
        .then(response => {
            response = dispatch({
                type: CREA_NEW_TYPE,
                payload: payload
            })
        });
    }
}

export const getPokemones = (payload) => {
    return async dispatch => {
        return  await axios.get("http://localhost:3001/pokemons", payload)
        .then(response => dispatch({
            type: GET_POKEMONES,
            payload: response.data
        }))
    }
}


export const getPokemonesById = (id) => {
    return function (dispatch) {
        axios.get(`http://localhost:3001/pokemons/one/${id}`)
        .then(response => dispatch(
            {
                type: GET_POKEMONES_BY_ID,
                payload: response.data
            }
        ))
    }

}


export function quitPokemonesById(){
    return {
                type: QUIT_POKEMONES_BY_ID, 
                payload:{}
             }    
}

export function createPokemon(payload){
    return async (dispatch)=>{
        dispatch({
            type: CREATE_POKEMON,
        });
        await axios.post('http://localhost:3001/pokemons/add', payload)
        .then((response)=>{
            console.log("registrado correctamente");
            console.log(response);
        })
    }

}

export function getAllTypes() {
    return async dispatch => {
        return  await axios.get("http://localhost:3001/types")
        .then(response => dispatch({
            type: GET_ALL_TYPES,
            payload: response.data
        }))
    }
}