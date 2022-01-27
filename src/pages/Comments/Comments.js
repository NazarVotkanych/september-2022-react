import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services/post.service";
import UserPost from "../../components/UserPost/UserPost";
import Comment from "../../components/Comment/Comment";

const Comments = () => {
    const {id} = useParams();

    const [comments, setComments] = useState(null)

    useEffect(() => {
        postService.getCommetnsByPostId(id).then(value => setComments(value))
    }, [id])
    return (
        <div>
            {
                comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;