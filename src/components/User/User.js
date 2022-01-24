import css from "./User.module.css";

const User = ({user, getUser}) => {
    const {id, name} = user

    return (
        <div className={css.user_module}>
            <div>{id}) {name}</div>
            <button onClick={()=>getUser(user)}>Details</button>

        </div>
    );
};

export default User;