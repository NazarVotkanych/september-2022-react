import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const postService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getPostsByUserId: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data),
    getAlbums: (id) => axiosService.get(`${urls.users}/${id}/albums`).then(value => value.data),
    getPhotosAlbums: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data),
    getAllPosts: () => axiosService.get(urls.posts).then(value => value.data),
    getPostsById: (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getCommetnsByPostId: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data),

}

