import { useLocation } from "react-router-dom";
import Header from "../header";

const HeaderContainer: React.FC = () =>{


const location = useLocation();
const shouldDisplayHeader = !['/login','/register'].includes(location.pathname);

    if (!shouldDisplayHeader){
    return null; // Don't render the header if the current path is /login or /register.
    }
    return <Header/>;
};

export default HeaderContainer;