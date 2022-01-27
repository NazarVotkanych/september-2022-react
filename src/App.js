import {Routes, Route, Link} from "react-router-dom";


import Users from "./pages/Users/Users";
import Posts from "./pages/Posts/Posts";
import Layout from "./components/Layout/Layout";

function App() {
  return (
      <>
          <Routes>
              <Route path={"/"} element={<Layout/>}>
                <Route path={"/users"} element={<Users/>}/>
                <Route path={"/posts"} element={<Posts/>}/>
              </Route>
          </Routes>

      </>

      );
}

export default App;
