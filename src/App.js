import React from "react";
import "./style.css";
import React, {useState} from 'react';

export default function App() {
  let[change1,setpara]=useState('para1');
let clickHere=true;
  function btn(){
   clickHere=!clickHere
    if(clickHere){
    setpara("para");
  }
  else{
    setpara("para1")
  }   
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button onClick={btn} >click</button>
      <p className={change1}>Start editing to see some magic happen :)</p>
    </div>
  );
}
