import React from 'react';
import './style.css';
import React, { useState } from 'react';

export default function App() {
  let[change1,setpara]=useState('para1');
  let[change2,setpara2]=useState('');

function btn2(){
  setpara2("showData")
  function showData(event){
    console.log(event.target.value)
      }
  
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
  }
  // function btn() {
  //   document.getElementById('change1').classList.toggle('para');
  // }
  function showData(event){
console.log(event.target.value)
  }

  return (
    <div>
      <h1 className={change1}>Hello StackBlitz!</h1>
      <button onClick={btn}>click</button>

      <form> 
        <input type='text' name='userName' onChange={showData}/>
        <button onClick={btn2} >Show</button>
      </form>
    </div>
  );
}
