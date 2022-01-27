import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user
    return (
        <div>
            {id}: {name} -
            <button><Link to={"/users/" + id} state={user}>User Details</Link></button>

            <button><Link to={"/users/" + id + "/albums"}>Albums</Link></button>
        </div>
    );
};

export default User;