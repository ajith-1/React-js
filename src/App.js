import React from 'react';
import './style.css';
import Logform from './Demo.jsx';
// import List1 from './Newapp.jsx';
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

      <Logform head="FORM 1" />
      {/* <List1 /> */}
    </div>
  );
}


export const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];
