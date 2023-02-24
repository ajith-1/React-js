import React from 'react';
import './style.css';
import React, { useState } from 'react';

export default function App() {
  /*let[change1,setpara]=useState('para1');
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
  function btn() {
    document.getElementById('change1').classList.toggle('para');
  }

  return (
    <div>
      <h1 id={'change1'}>Hello StackBlitz!</h1>
      <button onClick={btn}>click</button>
    </div>
  );
}
