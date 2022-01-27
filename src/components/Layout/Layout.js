import css from "../../App.module.css";
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to={"/users"}>Users</NavLink>
                <NavLink to={"/posts"}>Posts</NavLink>
            </div>
            <Outlet/>
        </>
    )
        ;
};

export default Layout;