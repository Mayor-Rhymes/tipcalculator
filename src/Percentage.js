//import {useState} from 'react';

const Percentage = (props) => {

    return ( 

        <div className="percent">

                <p>Select Tip %</p>


                <div className="split">


                    <div className="perk" onClick={() => props.change(5)}>
                      <p>5%</p>

                    </div>
                    <div className="perk" onClick={() => props.change(10)}>
                      <p>10%</p>
                    </div>
                    <div className="perk" onClick={() => props.change(15)}>

                      <p>15%</p>
                    </div>
                    <div className="perk" onClick={() => props.change(25)}>

                       <p>25%</p>
                    </div>
                    <div className="perk" onClick={() => props.change(50)}>

                       <p>50%</p>
                    </div>
                    <div className="perk custom">

                        {/* <p>Custom</p> */}

                     <input type="text" placeholder="Custom" className="custom-input"
                         onChange={(e) => props.change(e.target.value)}/>
                    </div>

                    {/* <div>

                        {props.value}
                    </div> */}
                   
                </div>
            </div>
     );
}
 
export default Percentage;