import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

export const Car = ({car,car:{id,model,price,year}}) => {

    const dispatch=useDispatch()

    return (
        <div>
            {car.id} --- {car.model} --- {car.price} --- {car.year}
            <button onClick={()=>{dispatch(carActions.setCarForUpdate({car}))}}>update</button>
            <button onClick={()=>{dispatch(carActions.deleteById({id}))}}>delete</button>
        </div>
    );
};

