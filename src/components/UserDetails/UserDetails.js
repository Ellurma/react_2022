import React from 'react';

const UserDetails = ({user}) => {
    const {id,name,username,email,phone,website,address:{street,suite,city}} = user;
    return (
        <div>
            <div>id--{id}</div>
            <div>name--{name}</div>
            <div>username--{username}</div>
            <div>email--{email}</div>
            <div>phone--{phone}</div>
            <div>website--{website}</div>
            <div>street--{street}</div>
            <div>suite---{suite}</div>
            <div>city--{city}</div>
        </div>
    );
};

export {UserDetails};