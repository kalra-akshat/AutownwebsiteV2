import Discussions from "./Discussions";
import Navbar from "./Navbar";
import Overview from "./Overview";
import ContactUs from "./contactus";
import { useRef } from 'react';

function MainPage (){
    
    const ref = useRef(null);
    

    
    return (
        <>
            <Navbar />
            <Overview/>
            <Discussions/>
            <ContactUs/>
        </>
    );
}

export default MainPage;