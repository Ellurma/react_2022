import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services";
import {UserDetails} from "../../components";

const SingleUserPage = () => {
    const {id}=useParams();
    const [user,setUser] = useState(null);
    useEffect(()=>{
        userService.getById(id).then(({data})=>setUser(data))
    },[id])
    return (
        <div>
            {user && <UserDetails user={user}/>}
        </div>
    );
};

export {SingleUserPage};