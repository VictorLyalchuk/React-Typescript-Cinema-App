import Header from "./Header"
import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <>
        <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
}
export default Layout;