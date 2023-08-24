import bits_logo from './Images/bits_logo.png'
import './Styling/Navbar.css';

import Discussions from "./Discussions";

function Navbar () {
    const handleClick=(e)=>{
        // ref.current?.scrollIntoView({behavior: 'smooth'});
        console.log(e.target.value)
    };

    return (
        <>
            <div className="mainlayout" >
                <img alt="bits logo" src={bits_logo} className="bits_logo"></img>
                <nav>
                    <ul className="navStyle">
                        <li><a href="#1" onClick={handleClick}>Overview</a></li>
                        <li><a href="#2">Discussions</a></li>
                        <li><a href="#3">Event Info</a></li>
                        <li><a href="#4">Contact Us</a></li>
                        <span ><li><a href="#6" className="btn">Register</a></li></span>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <h2>BITS Pilani's</h2>
                <h1><span style={{color: '#08bd8f'}}>AUTO</span>wn<span>'23</span></h1>
                <h3>Connected | Autonomous | Secured | Electrified</h3>
            </div>
        </>
    );
}

export default Navbar;