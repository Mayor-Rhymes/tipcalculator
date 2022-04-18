import React, {useEffect, useState} from 'react';
import FirstSection from './FirstSection';

import SecondSection from './SecondSection';



const App = () => {
  //let nomo = 0.0000;
  const [value, setValue] = useState(0);
  const [bill, setBill] = useState(0);
  const [peopleNum, setPeopleNum] = useState(0);
  //const [tip, setTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState('0.00');
  const [totalPerPerson, setTotalPerPerson] = useState('0.00');

  
  const changeTip = () => {

    if(bill !== 0 && peopleNum !== 0 && value !== 0){
    setTipPerPerson(((bill*(value/100))/peopleNum).toPrecision(4));
    setTotalPerPerson(((bill/peopleNum)).toPrecision(4));

  }

  else{

    setTipPerPerson('0.00');
    setTotalPerPerson('0.00');
  }

  }


  


  const changeValue = (val) => {

    setValue(val);
    changeTip();
    
    
  }

  const refreshPage = () => {

    window.location.reload(false);
  }
  

  

  

  useEffect(() => {


    changeTip();
  }, [changeTip, tipPerPerson])


  

  
  return ( 
    

    <>
    <h3>SPLI <br /> TTER</h3>

    <div className="container">

      
     <FirstSection change={changeValue} val={value} bill={bill} setBill={setBill}
     
     peopleNum={peopleNum} setPeopleNum={setPeopleNum}/>
         
       
     <SecondSection tip={tipPerPerson} total={totalPerPerson} reload={refreshPage}/>


    </div>
    </>
   );
}
 
export default App;