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
                <div className="card">
                    <div class="front">
                    <div className='icon'><FaCarOn /></div>
                    <h5>ADAS</h5>
                        {/* <p>
                            Automous Vehicles advancements in future.
                        </p> */}
                        {/* <p style="text-align: center;">
                            <a className="button" href="#">Read More</a>
                        </p> */}

                    </div>
                    <div className='back'>
                        THE BACK 
                    </div>
                </div>


                <div class="card">
                    <div class="front">
                    <div className='icon'><FaShieldAlt /></div>
                    <h5>Cybersecurity</h5>
                        {/* <p>
                            Unlocking the next wave of technologies for data privacy
                        </p> */}
                        {/* <p><p style="text-align: center;">
                            <a className="button" href="#">Read More</a>
                        </p> */}

                    </div>
                    <div className='back'>
                        THE BACK 
                    </div>
                </div>

                <div className="card">
                    <div className="front">
                    <div className='icon'><FaBatteryHalf /></div>
                    <h5>EV</h5>
                        {/* <p>
                            Changing dynamics of the industry with EV
                        </p> */}
                        {/* <p><p style="text-align: center;">
                            <a className="button" href="#">Read More</a>
                        </p> */}

                    </div>
                    <div className='back'>
                        THE BACK 
                    </div>
                </div>

                <div className="card">
                    <div className="front">
                    <div className='icon'><FaIndustry /></div>
                    <h5>Smart Manufacturing</h5>
                        {/* <p>
                            The Gamechanger of the manufacturing sector .
                        </p> */}
                        {/* <p><p style="text-align: center;">
                            <a className="button" href="#">Read More</a>
                        </p> */}

                    </div>
                    <div className='back'>
                        THE BACK 
                    </div>
                </div>

            </div>
        </>
    );
}

export default Discussions;