import binocs from './Images/binocs.png'
import './Styling/Overview.css'

function Overview() {
    return (
        <>
            <div class="overview">
                <div class="main">
                    <img class="binoc" src={binocs}></img>
                    <div class="overview-text">
                        <h2 >Overview</h2>
                        <p>The present times are challenging but replete with creative and innovative solutions. Saving the environment from further deterioration is a major challenge. Faster mobility is a necessity. Means of quick transportation are touted to be contributing to nearly a fourth of global CO2 emissions.
                            Finding a way out, a viable solution for cleaner, more efficient, and safer mobility/transportation solutions is inevitable. Creative and innovative solutions are emerging to meet the twin challenges of environmental protection and faster but safer mobility from the growth of electric and alternative fuel automotives. Innovations make the automobile a third living space which is smarter as well. This metamorphosis makes vehicles software defined. The softwarisation of the automobile or the Software Defined Vehicle (SDV) is engaging the attention of the think-tank of the auto industry globally.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Overview;