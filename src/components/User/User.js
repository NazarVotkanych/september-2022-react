
const User = ({user:{userId, name}}) => {
    return (
        <div>
            <div>Id: {userId}</div>
            <div>Name: {name }</div>
        </div>
    );
};

export default User;