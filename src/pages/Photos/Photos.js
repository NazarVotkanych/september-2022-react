import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";
import Photo from "../../components/Photo/Photo";

const Photos = () => {
    const {albumsId} = useParams()

    const [photos, setPhotos] = useState(null)

    useEffect(() => {
        postService.getPhotosAlbums(albumsId).then(value => setPhotos(value))
    }, [albumsId])

    return (
        <div>
            {photos && photos.map(photos => <Photo key={photos.id} photos={photos}/>)}
        </div>
    );
};

export default Photos;