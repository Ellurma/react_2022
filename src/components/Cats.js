import React from 'react';
import {useSelector} from "react-redux";
import {Cat} from "./Cat";


export const Cats = () => {
    const {cats} = useSelector(state => state.cats);

    return (
        <div>
            {cats.map((cat)=><Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

