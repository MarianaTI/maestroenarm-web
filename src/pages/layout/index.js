import Navigation from "../../components/Nab";

const Layout = ({children}) => {
    return(
        <div>
            <Navigation/>
            <div>{children}</div>
        </div>
    )
};
export default Layout;
