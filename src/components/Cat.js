import React from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../redux";

export const Cat = ({cat}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {cat.name}
            <button onClick={()=>dispatch(catActions.setCatForUpdate({cat}))}>Update</button>
            <button onClick={()=>dispatch(catActions.deleteCat({id:cat.id}))}>Delete</button>

        </div>
    );
};

