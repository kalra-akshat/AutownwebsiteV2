import bits_logo from './Images/bits_logo.png'
import './Styling/Navbar.css';

function Navbar() {


    return (
        <>
            <div class="mainlayout" >
                <img alt="bits logo" src={bits_logo} class="bits_logo"></img>
                <nav>
                    <ul class="navStyle">
                        <li><a href="#1">Overview</a></li>
                        <li><a href="#2">Speakers</a></li>
                        <li><a href="#5">Event Info</a></li>
                        <li><a href="#7">Contact Us</a></li>
                        <span ><li><a href="#6" class="btn">Register</a></li></span>
                    </ul>
                </nav>
            </div>
            <div class="content">
                <h2>BITS Pilani's</h2>
                <h1><span style={{color: '#08bd8f'}}>AUTO</span>wn<span>'23</span></h1>
                <h3>Connected | Autonomous | Secured | Electrified</h3>
            </div>
        </>
    );
}

export default Navbar;