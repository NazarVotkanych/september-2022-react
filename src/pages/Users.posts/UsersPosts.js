import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/post.service";

const UsersPosts = () => {
    const {id} = useParams();

    const [usersPosts, setUsersPosts] = useState(null)

    useEffect(() =>{
        postService.getById(id).then(value => setUsersPosts(value))
    })
    return (
        <div>
            {usersPosts}
        </div>
    );
};

export default UsersPosts;