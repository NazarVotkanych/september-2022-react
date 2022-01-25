import Form from "./Form/Form";
import Users from "./components/Users/Users";
import {useEffect, useState} from "react";
import {userService} from "./services/user.service";
import users from "./components/Users/Users";

const App = () => {
    const [user, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => {
            setUsers([...value])
            setFilteredUsers([...value])
        })
    }, [])

    const getFilter = (data) => {
        let filteredArr = [...user]


        if (data.name){
            filteredArr = filteredArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username){
            filteredArr = filteredArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email){
            filteredArr = filteredArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFilteredUsers(filteredArr)
    }
  return (
      <div>
          <Form getFilter={getFilter}/>
          <Users users={filteredUsers}/>
      </div>
  );
};

export default App;
