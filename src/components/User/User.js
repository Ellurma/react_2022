import React from 'react';
import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id,name,username} = user;
    return (
        <div>
            <div>id--{id}</div>
            <div>name--{name}</div>
            <div>username--{username}</div>
            <Button to={id.toString()}>get Details</Button>
            <br/>
        </div>
    );
}

export {User};


