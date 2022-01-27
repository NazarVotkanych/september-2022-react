import css from "../../pages/Albums/Albums.module.css"

const Photo = ({photos}) => {
    const {albumId, id, title, url} = photos
    return (
        <div>
            <div>Album Id: {albumId}
                Id: {id}
                Title: {title}
            </div>
            <img className={css.albums_img} src={url} alt=""/>
        </div>
    );
};

export default Photo;