import './Styling/Discussions.css';
import { FaCarOn } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { FaBatteryHalf } from "react-icons/fa";

function Discussions() {
    return (
        <>
            <div className="Discussions">
                <div className="title">
                    Events
                </div>
            </div>
            
            <div className="box">
            <div className="card-box">
                <div className="card">
                    <div className="front">
                    <div className='icon'><FaCarOn /></div>
                    <h5>ADAS</h5>
                    </div>
                    <div className='back'>
                    <p><span style={{color:"#08bd8f"}}>SPOC:</span>  Mr. Parjanya</p>        
                    <p><span style={{color:"#08bd8f"}}>MAIL ID:</span> <a>parjanya.yaragani@pilani.bits-pilani.ac.in</a></p>
                    <p><span style={{color:"#08bd8f"}}>MOBILE NO:</span> 6354835188</p>
                    </div>
                </div>
                </div>

                <div className="card-box">
                <div className="card">
                    <div className="front">
                    <div className='icon'><FaShieldAlt /></div>
                    <h5>Cybersecurity</h5>
                    </div>
                    <div className='back'>
                    <p><span style={{color:"#08bd8f"}}>SPOC:</span> Ms. Indumathi Madhu</p>        
                    <p><span style={{color:"#08bd8f"}}>MAIL ID:</span> <a>indumathi.m@pilani.bits-pilani.ac.in</a></p>
                    <p><span style={{color:"#08bd8f"}}>MOBILE NO:</span> 7904316109</p>
                    </div>
                </div>
                </div>
                <div className="card-box">
                <div className="card">
                    <div className="front">
                    <div className='icon'><FaBatteryHalf /></div>
                    <h5>EV</h5>
                    </div>
                    <div className='back'>
                    <p><span style={{color:"#08bd8f"}}>SPOC:</span>  Mr. Vykunt</p>        
                    <p><span style={{color:"#08bd8f"}}>MAIL ID:</span> <a>vykunta.rao@wilp.bits-pilani.ac.in</a></p>
                    <p><span style={{color:"#08bd8f"}}>MOBILE NO:</span> 7416196828</p>
                    </div>
                </div>
                </div>
                <div className="card-box">
                <div className="card">
                    <div className="front">
                    <div className='icon'><FaIndustry /></div>
                    <h5>Smart Manufacturing</h5>
                    </div>
                    <div className='back'>
                    <p><span style={{color:"#08bd8f"}}>SPOC:</span>  Mr. Vennish & Mr. Sanjai</p>        
                    <p><span style={{color:"#08bd8f"}}>MAIL ID:</span> <a>vennishmuthu@wilp.bits-pilani.ac.in</a> || <a>sanjai.k@pilani.bits-pilani.ac.in </a></p>
                    <p><span style={{color:"#08bd8f"}}>MOBILE NO:</span> 8056320310 || 8657592434</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Discussions;