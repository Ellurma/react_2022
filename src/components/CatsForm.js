import React, {useEffect, useState} from 'react';
import {catActions} from "../redux";
import {useDispatch, useSelector} from "react-redux";

export const CatsForm = () => {
    const [name, setName] = useState('')
    const {catForUpdate} = useSelector(state => state.cats);
    const dispatch = useDispatch();

    useEffect(() => {
        if (catForUpdate) {
            setName(catForUpdate.name)
        }
    }, [catForUpdate])

    const addCat = () => {
        if (catForUpdate) {
            dispatch(catActions.updateCat({name, id: catForUpdate.id}))
        } else {
            dispatch(catActions.add({name}))
        }
        setName('')
    }

    return (
        <div>
            <div>
                <label>Cat name : <input type="text" onChange={(e) => setName(e.target.value)} value={name}/></label>
                {<button onClick={addCat}>Add</button>}
            </div>


        </div>
    );
};

