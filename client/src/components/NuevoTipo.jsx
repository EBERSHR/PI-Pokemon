import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { creaNewType, getAllTypes } from '../actions';

const NuevoTipo = () => {

    const [formVisible, setFormVisible] = useState(false);
    const [tipoNuevo, setTipoNuevo] = useState({
        name: ""
    });

    const dispatch = useDispatch();

    const handleBooleanHook = () => {
        setFormVisible(true);
    }

    const handleOnChange = (e) => {
        setTipoNuevo({
            name: e.target.value
        })
    }

    const handleOnSubmitNewType = (e) => {
        e.preventDefault();
        dispatch(creaNewType(tipoNuevo));
        dispatch(getAllTypes());
        setFormVisible(false);

    }

    return (
        <div>
            <div>
                {!formVisible ? <input type="button" onClick={handleBooleanHook}/> : <></>}
            </div>
            {formVisible ? <form onSubmit={e => {handleOnSubmitNewType(e)}}>
                <input type="text" onChange={e => {handleOnChange(e)}}/>
                <input type="submit" />
            </form> : <></>}
            
        </div>
    );
}

export default NuevoTipo;
