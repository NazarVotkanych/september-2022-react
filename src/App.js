import Users from "./components/Users"
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import "./Elements.css"

function App() {

    return (
        <>
            <div className='wrap'>
                <Users/>
                <hr/>
                <Posts/>
            </div>
            <hr/>
            <Comments/>

        </>
    );
}

export default App;
