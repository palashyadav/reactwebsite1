import React, { useState } from 'react';
import './Protein.css'

function Caloriemeter() {
    const [weight,setweight]=useState();
    const [weight2,setweight2]=useState();
    const [Weight,setWeight]=useState();
    const [Weight2,setWeight2]=useState();
    const [element,setelement]=useState();
    const [Element,setElement]=useState();
    const [calories,setcalories]=useState();
        const change=(event)=>{
        event.preventDefault();
        setweight(event.target.value);
    }
    const change1=(event)=>{
        event.preventDefault();
        setweight2(event.target.value);
    }
    const run=(event)=>{
        event.preventDefault();
        setelement(event.target.value);
    }
    const click=(event)=>{
        event.preventDefault();
       setWeight(weight);
       setWeight2(weight2);
       setElement(element);
    }
    const check=()=>{
        if(Weight2>Weight){
            setcalories(`${((Weight2-Weight)/element)*4500} calories surplus per day, Eat clean food.`)
        }
        else if(Weight2<Weight){
            setcalories(`${((Weight-Weight2)/element)*4500} calories deficit per day, Eat clean food.`)
        }
    }
  return (
    <div className='pro' style={{border:'2px solid grey',backgroundColor:'lightblue',maxWidth:'1300px',margin:'auto'}}>
        
        <p style={{fontSize:'20px',fontWeight: 'bold',color:'GrayText'}}>Weight : {Weight}</p>
      <input  placeholder='Enter Your Weight' value={weight} onChange={change}></input>
      <hr/>
      <p style={{fontSize:'20px',fontWeight: 'bold',color:'GrayText'}}>Weight goal: {Weight2}</p>
      <input  placeholder='Enter Your goal Weight' value={weight2} onChange={change1}></input>
      <hr/>
      <p style={{fontSize:'20px',fontWeight: 'bold',color:'GrayText'}}>Days for your goal: {Element}</p>
      <input placeholder='Enter days' value={element} onChange={run}/>
      <hr/>
      <button onClick={click}>Submit</button>
      <hr/>
      <button onClick={check}>Check</button>
      <h3 style={{fontWeight: 'bold',color:'GrayText'}}>Calories needed is : {calories}</h3>
    </div>
  )
}

export default Caloriemeter
