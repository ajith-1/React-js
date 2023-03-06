import React from 'react';
import './style.css';
import Logform from './Demo.jsx'
import React, { useState } from 'react';

export default function App() {
/*  let[change1,setpara]=useState('para1');
  
}
let click=true;
  function btn(){
   click=!click
    if(click){
    setpara("para");
  }
  else{
    setpara("para1")
  }   
  }*/


  return (
    <div>
      {/* <h1 className={change1}>Hello StackBlitz!</h1>
      <button onClick={btn}>click</button> */}

      <Logform head='FORM 1'/>
      <Logform head='FORM 2'/>
      <Logform head='FORM 3'/>
      <Logform head='FORM 4'/>


    </div>
  );
}
