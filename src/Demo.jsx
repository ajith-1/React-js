import React from 'react';
import React, { useState } from 'react';
import { expenses } from "./App.js";

import './style.css';

export default function Logform(props) {
  const [state, setState] = useState({
    fname: '',
    lname: '',
    email: '',
  });

  const change = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      'First Name : ' +
        state.fname +
        '\n' +
        'Last Name : ' +
        state.lname +
        '\n' +
        'Email : ' +
        state.email
    );
  };

  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <div className="forms">
          <label>First Name</label>
          <br></br>
          <input
            type="text"
            name="fname"
            value={state.fname}
            onChange={change}
          />
        </div>
        <br></br>
        <div className="forms">
          <label>Last Name</label>
          <br></br>
          <input
            type="text"
            name="lname"
            value={state.lname}
            onChange={change}
          />
          <br></br>
        </div>

        <div className="forms">
          <label>Email</label>
          <br></br>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={change}
          />
          <br></br>
        </div>
        <div className="forms">
          <label></label>
          <br></br> <button type="submit">Login</button>
        </div>
      </form>
      <div>
        <p>First Name : {state.fname}</p>
        <p>Last Name : {state.lname}</p>
        <p>Email : {state.email}</p>
      </div>
    </div>
  );
}

 
 export default function List1(props){

  const [change, setChange] = useState("");

  const b = expenses.map((e) => {

     console.log(e)
  });
 
const next=(e)=>{
  setChange("e")
  // console.log(e)
}
const prev=(e)=>{

}

  return (<div>
  <h1>Expenses</h1>
      <p className={change.id}></p>
      <p className={change.title}></p>
      <p className={change.amount}></p>
      <p className={change.date}></p>
     <button onClick={prev}>Prev</button>
     <button onClick={next}>Next</button>
  
  </div>);
  }
 
