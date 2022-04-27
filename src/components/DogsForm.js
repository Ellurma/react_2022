import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {dogActions} from "../redux";

export const DogsForm = () => {
    const [name, setName] = useState('')
    const {dogForUpdate} = useSelector(state => state.dogs);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(dogForUpdate){
            setName(dogForUpdate.name)
        }
    },[dogForUpdate])

    const addDog = () => {
        if (dogForUpdate) {
            dispatch(dogActions.updateDog({name, id: dogForUpdate.id}))
        } else {
            dispatch(dogActions.add({name}))
        }
        setName('')
    }
    return (
        <div>
            <div>
                <label>Dog name : <input type="text" onChange={(e) => setName(e.target.value)} value={name}/></label>
                {<button onClick={addDog}>Add</button>}
            </div>


        </div>
    );
};


