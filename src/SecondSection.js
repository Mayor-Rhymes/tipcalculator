const SecondSection = (props) => {
    return ( 

        <div className="second-section">
           

           <div className="board">
                 

                 <p className="tip">Tip Amount <br /><span>/ Person</span></p>


                 <p className='pricer'>${props.tip}</p>
              

           </div>


           <div className="board">

           <p className="tip">Total <br /><span>/ Person</span></p>


           <p className='pricer'>${props.total}</p>

           </div>


           <button onClick={props.reload}>
             

             RESET

           </button>

            
        </div>
     );
}
 
export default SecondSection;