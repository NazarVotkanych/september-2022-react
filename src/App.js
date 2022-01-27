import {Routes, Route, Link} from "react-router-dom";


import Users from "./pages/Users/Users";
import Posts from "./pages/Posts/Posts";
import Layout from "./components/Layout/Layout";
import UserDetails from "./pages/UserDetails/UserDetails";
import UsersPosts from "./pages/Users.posts/UsersPosts";
import Albums from "./pages/Albums/Albums";
import Photos from "./pages/Photos/Photos";
import PostsDetails from "./pages/PostsDetails/PostsDetails";
import Comments from "./pages/Comments/Comments";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/users"} element={<Users/>}>
                        <Route exact path={":id"} element={<UserDetails/>}>
                            <Route path={"posts"} element={<UsersPosts/>}/>
                        </Route>
                        <Route path={":id/albums"} element={<Albums/>}>
                            <Route path={":albumsId/photos"} element={<Photos/>}/>

                        </Route>
                    </Route>
                    <Route path={"/posts"} element={<Posts/>}>
                        <Route exact path={":id"} element={<PostsDetails/>}>
                            <Route path={"comments"} element={<Comments/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>

        </>

    );
}

export default App;
