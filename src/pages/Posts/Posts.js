import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import css from "./Posts.module.css"
import {Outlet} from "react-router-dom";

const Posts = () => {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        postService.getAllPosts().then(value => setPosts(value))

    }, [])
    return (
        <div>
            <h4>Posts</h4>
            <div className={css.posts}>
                {
                    posts && posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export default Posts;