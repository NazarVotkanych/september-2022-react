import {Routes, Route, Link} from "react-router-dom";


import Users from "./pages/Users/Users";
import Posts from "./pages/Posts/Posts";
import Layout from "./components/Layout/Layout";
import UserDetails from "./pages/UserDetails/UserDetails";
import UsersPosts from "./pages/Users.posts/UsersPosts";

function App() {
  return (
      <>
          <Routes>
              <Route path={"/"} element={<Layout/>}>
                <Route path={"/users"} element={<Users/>}>
                    <Route path={"/users:id"} element={<UserDetails/>}/>
                    <Route path={"/users:id/posts"} element={<UsersPosts/>}/>
                </Route>
                <Route path={"/posts"} element={<Posts/>}/>
              </Route>
          </Routes>

      </>

      );
}

export default App;
