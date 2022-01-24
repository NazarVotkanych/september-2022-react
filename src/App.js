import React, {useState} from 'react';

import Users from "./components/Users/Users";
import UserDetails from "./components/UsersDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import css from "./App.modules.css";
import {postService} from "./post.service";


const App = () => {
    const [user,setUser] = useState(null);
    const [posts,setPosts] = useState(null);

    const getUser = (user) => {
    setUser(user);
    setPosts([])
    }

    const getUserId = (id) => {
    postService.getByUserId(id).then(value => setPosts(value))
    }
  return (
      <div className={css.wrap}>
        <div>
            <Users getUser={getUser}/>
            {user && <UserDetails user={user} getUserId={getUserId}/>}
        </div>
          {posts && <Posts posts={posts}/>}
      </div>
  );
};

export default App;
