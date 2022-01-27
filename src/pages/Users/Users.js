import {useEffect, useState} from "react";
import {postService} from "../../services/post.service";
import User from "../../components/User/User";

const Users = () => {

    const [users, setUsers] = useState([]);
    useEffect(()=> {
        postService.getAll().then(value => setUsers(value[{...value}]))
    })
    return (
        <div>
            <h4>Users</h4>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;