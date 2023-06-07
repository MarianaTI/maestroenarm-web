import { Navigation } from "@mui/icons-material";

const Layout = ({children}) =>{
    return(
        <div>
            <Navigation/>
            <div>{children}</div>
        </div>
    )
}

export default Layout;