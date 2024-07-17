import React from "react";
import Footer from "../footer";
import { useLocation } from "react-router-dom";

const FooterContainer: React.FC = () =>{
    
    const location = useLocation();
    const shouldDisplayFooter = !['/login','/register'].includes(location.pathname);

    if (!shouldDisplayFooter){
    return null; // Don't render the header if the current path is /login or /register.
    }
    return <Footer/>;
};

export default FooterContainer