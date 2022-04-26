import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {postService, userService} from "../../services";
import {UserDetails} from "../../components";

const SingleUserPage = () => {
    const {state} = useLocation()
    const [user, setUser] = useState(state)
    const {id} = useParams()
    useEffect(() => {
        if (!state) {
            userService.getById(id).then(({data}) => setUser(data))
        } else {
            setUser(state)
        }
    }, [id, state])

    return (
        <div>
            {user && <UserDetails user={user}/>}
            <button>get Details</button>
        </div>

    );
}

export {SingleUserPage};