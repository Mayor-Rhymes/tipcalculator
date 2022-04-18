import Percentage from './Percentage';
const FirstSection = (props) => {
    return ( 

        <div className="first-section">

            <form className="bill">

                <label>Bill</label>
                <input type="text" className="text-input" placeholder={props.bill} onChange={(e) => props.setBill(e.target.value)}/>
            </form>


            <Percentage change={props.change} value={props.val}/>

            <form className="people-num">

                <label>Number of People:</label>
                <input type="text" className="text-input" placeholder={props.peopleNum} onChange={(e) => props.setPeopleNum(e.target.value)}/>

            </form>



        </div>
     );
}
 
export default FirstSection;