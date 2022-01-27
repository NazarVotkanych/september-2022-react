import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/post.service";
import user from "../../components/User/User";

const UserDetails = () => {
    const {id} = useParams();

    const [userDetail, setUserDetail] = useState(null)

    useEffect(() =>{
        postService.getById(id).then(value => setUserDetail(value))
    })
    return (
        <div>
            {userDetail && (
                <div>
                    <div>Id: {id}</div>
                    <div>Name: {userDetail.name}</div>
                    <div>Username: {userDetail.username}</div>
                    <div>Email: {userDetail.email}</div>
                </div>
            )}
            <button><Link to={"/users/" + id + "/posts"}>Post</Link></button>

        </div>
    );
};

export default UserDetails;
