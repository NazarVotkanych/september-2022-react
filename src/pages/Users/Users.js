import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import User from "../../components/User/User";
import css from "./Users.module.css"

const Users = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        postService.getAll().then(value => setUsers(value))
    }, [])

    return (
        <div>
            <h4>Users</h4>
            <div>{users.map(user => <User key={user.id} user={user}/>)}</div>

            <div className={css.middle}><Outlet/></div>

        </div>


    );
};

export default Users;