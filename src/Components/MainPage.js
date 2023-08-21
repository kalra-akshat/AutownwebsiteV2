import Discussions from "./Discussions";
import Navbar from "./Navbar";
import Overview from "./Overview";
import ContactUs from "./contactus";

function MainPage (){
    return (
        <>
            <Navbar/>
            <Overview/>
            <Discussions/>
            <ContactUs/>
        </>
    );
}

export default MainPage;