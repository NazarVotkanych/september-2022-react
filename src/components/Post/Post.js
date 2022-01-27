import css from "../../pages/Posts/Posts.module.css"
import {Link} from "react-router-dom";
const Post = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div className={css.posts}>
            User Id: {userId}
            Id: {id}
            Title: {title}
            Body: {body}

            <button><Link to={"/posts/" + id} state={post}>User Details</Link></button>
        </div>
    );
};

export default Post;