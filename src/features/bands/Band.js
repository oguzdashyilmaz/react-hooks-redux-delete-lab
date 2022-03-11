import React from 'react';
import { useDispatch } from "react-redux";
import { bandRemoved } from './bandsSlice';

const Band = ({ band }) => {
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(bandRemoved(band.id))
    }
    return (
        <li style={{marginBottom: 10}}>
            <span>{band.name}</span>
            <button onClick={handleDelete} style={{marginLeft: 10, color:"black", backgroundColor: "red", borderRadius: 10}}>Delete Band</button>
        </li>
    );
}

export default Band;