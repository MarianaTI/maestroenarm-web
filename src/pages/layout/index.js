import Navigation from "../../components/Nabvar";

const Layout = ({children}) => {
    return(
        <div>
            <Navigation/>
            <div>{children}</div>
        </div>
    )
};
export default Layout;
