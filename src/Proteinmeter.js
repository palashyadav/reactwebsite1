import React, { useState } from 'react';
import './Protein.css'

function Proteinmeter() {
    const [weights,setweights]=useState();
    const [finalweight,setfinalweight]=useState();
    const [exercise,setexercise]=useState();
    const [finalexercise,setfinalexercise]=useState();
    const [protein,setprotein]=useState();
    const change=(event)=>{
        event.preventDefault();
        setweights(event.target.value)
    }
    const change2=(event)=>{
        event.preventDefault();
        setexercise(event.target.value)
    }
    const clic=()=>{
        setfinalweight(weights);
        setfinalexercise(exercise);
    }
    const check=()=>{
        if(exercise==='yes'){
              setprotein(weights* 2)
        }
        else{
            setprotein(weights)
        }
    }
  return (
    <div className='pro' style={{border:'2px solid grey',backgroundColor:'lightblue',maxWidth:'1300px',margin:'auto'}}>
        <p style={{fontSize:'20px',fontWeight: 'bold',color:'GrayText'}}>Weight (in kgs) : {finalweight}</p>
        <input  placeholder='Enter your weight' value={weights} onChange={change}></input>
        <hr/>
        <p style={{fontSize:'20px',fontWeight: 'bold',color:'GrayText'}}>Exercise? : {finalexercise}</p>
       <input  placeholder='Exercise (Enter yes or no)' value={exercise} onChange={change2}></input>
       <hr/>
        <button onClick={clic}>Submit</button>
        <hr/>
        <button onClick={check}>Check protein need</button>
        <h3 style={{fontWeight: 'bold',color:'GrayText'}}>Protein needed is {protein} grams</h3>
      
    </div>
  )
}

export default Proteinmeter
