import {Link} from "react-router-dom";

const Album = ({albums}) => {
    const {id, userId, title} = albums
    return (
        <div>
            Id: {id}
            User Id: {userId}
            Title: {title}
            <div>
                <button><Link to={id + "/photos"}>Photos</Link></button>
            </div>

        </div>
    );
};

export default Album;