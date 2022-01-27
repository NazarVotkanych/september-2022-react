
const UserPost = ({usersPosts}) => {
    const {id, userId, title, body} = usersPosts
    return (
        <div>

            <div>Id: {id}</div>
            <div>User Id: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>

        </div>
    );

};

export default UserPost;