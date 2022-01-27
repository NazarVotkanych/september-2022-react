import css from "./Comment.module.css"

const Comment = ({comment}) => {

    const {id, postId, name, email, body} = comment

    return (
        <div>
            <div className={css.comment}>
                <div>Id:{id}</div>
                <div>Post Id: {postId}</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>Body: {body}</div>
            </div>

        </div>
    );
};

export default Comment;