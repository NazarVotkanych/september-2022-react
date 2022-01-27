import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


import {postService} from "../../services/post.service";
import UserPost from "../../components/UserPost/UserPost";
import css from "./UsersPosts.module.css"


const UsersPosts = () => {
    const {id} = useParams();
    const [usersPosts, setUsersPosts] = useState(null)

    useEffect(() => {
        postService.getPostsByUserId(id).then(value => setUsersPosts(value))
    }, [id])
    return (
        <div className={css.bottom}>
            <div className={css.bottom}>
                {
                    usersPosts && usersPosts.map(usersPosts => <UserPost key={usersPosts.id} usersPosts={usersPosts}/>)
                }
            </div>
        </div>
    );
};

export default UsersPosts;