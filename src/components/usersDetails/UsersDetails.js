import React from 'react';

const UsersDetails = ({userDetails, getUserId}) => {
const {id, name, username, email} = userDetails;
    return (
        <div>
             <h3>{id})-{name} {username}</h3>
             <p>email:{email}</p>
            <button onClick={()=>getUserId(id)}>getPosts</button>
        </div>
    );
};

export default UsersDetails;