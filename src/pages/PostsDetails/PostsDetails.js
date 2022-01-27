import {Link, Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/post.service";

const PostsDetails = () => {
    const {id} = useParams();

    const [postDetail, setPostDetail] = useState(null)

    useEffect(() => {
        postService.getPostsById(id).then(value => setPostDetail(value))
    }, [id])


    return (
        <div>

            {
                postDetail && (
                    <div>
                        <div> User Id:{postDetail.userId}</div>
                        <div> Id:{postDetail.id}</div>
                        <div> Title Id:{postDetail.title}</div>
                        <div> Body:{postDetail.body}</div>
                    </div>
                )
            }
            <button><Link to={"/posts/" + id + "/comments"}>Post</Link></button>

            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsDetails;