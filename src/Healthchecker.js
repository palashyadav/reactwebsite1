import React, { useState } from 'react';
import './Protein.css';

function Healthchecker() {
    const [initial,setinitial] =useState();
    const [initial1,setinitial1]=useState();
    const [Weight,setWeight] =useState();
    const [Height,setHeight] =useState();
    const [health,sethealth]=useState();
    const change=(event)=>{
        event.preventDefault();
        setinitial(event.target.value)
    }
    const change2=(event)=>{
        event.preventDefault();
        setinitial1(event.target.value)
    }
    const Submit=(event)=>{
           setWeight(initial);
           setHeight(initial1);
           
    }
     const check=()=>{
        if(Weight/Height>12){
             sethealth('You are fat, try our weight loosing program.')
        }
        else if(Weight/Height<11){
             sethealth('You are too thin, try our muscle building program.')
        }
        else{
             sethealth("You are fit , you just need to maintain your muscle mass, try our maintenence diet.")
        }
     }

  return (
    <div className='pro' style={{border:'2px solid grey',backgroundColor:'lightblue',maxWidth:'1300px',margin:'auto'}}>
        <p style={{fontSize:'20px',fontWeight: 'bold',color:'GrayText'}}>Weight: {Weight}</p>
        <input placeholder='WEIGHT(in kgs)' onChange={change} value={initial}/>
        <hr/>
        <p style={{fontSize:'20px',fontWeight: 'bold',color:'GrayText'}}>Height: {Height}</p>
        <input placeholder='HEIGHT (in feet)' onChange={change2} value={initial1}/>
        <hr/>
        <button onClick={Submit}>Submit</button>
        <hr/>
        <button onClick={check}>Check Health</button>
         <h3 style={{fontWeight: 'bold',color:'GrayText'}}>{health}</h3>

     
    </div>
  )
}

export default Healthchecker
