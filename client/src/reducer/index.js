import { CREATE_POKEMON, CREA_NEW_TYPE, 
    GET_ALL_TYPES, GET_POKEMONES, 
    GET_POKEMONES_BY_ID, JOIN_POKEMON, 
    QUIT_POKEMONES_BY_ID, SET_FILTERS, GET_PK_BY_NAME } from "../actions";



const initialState={

    pokemones: [],
    pokemon:{},
    types : [],
    idName: {}
}


export default function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_POKEMONES:
            return{
                ...state,
                pokemones: action.payload
            }
        case GET_POKEMONES_BY_ID:
            return{
                ...state,
                pokemon: action.payload
            }
        case QUIT_POKEMONES_BY_ID:
            return {
                ...state,
                pokemon: action.payload
            } 
        case CREATE_POKEMON:
            return {
                ...state,
                pokemones: [...state.pokemones, action.payload]
            }
        case GET_ALL_TYPES:
            return{
                ...state,
                types: action.payload
            }           
        case CREA_NEW_TYPE:
            return {
            }
        case JOIN_POKEMON:
            return {
                ...state,
                pokemones: [action.payload, ...state.pokemones]
            }    
        case SET_FILTERS:
            return {
                ...state, 
                pokemones: action.payload
            }    
            case GET_PK_BY_NAME:
                return{
                    ...state,
                    idName: action.payload
                }

        default: return state
    }
}