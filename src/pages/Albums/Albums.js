import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import Album from "../../components/Album/Album";
import css from "./Albums.module.css"

const Albums = () => {
    const {id} = useParams();

    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        postService.getAlbums(id).then(value => setAlbums(value))
    }, [id])

    return (
        <div className={css.albums}>
            {
                albums.map(albums => <Album key={albums.id} albums={albums}/>)
            }
            <Outlet/>
        </div>
    );
};

export default Albums;