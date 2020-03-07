import React from "react";
//import "./style.css";

function RadioOptions(props) {
  return (
    <form className="text-center">      
        <label className="mx-4" >
          <input className="mr-1" type = "radio"  name="selectedOption" value="all" checked = {props.selectedOption === 'all'} onClick={props.updateSearch}/>
            View All Employees
        </label>
        <label className="mx-4">
          <input className="mr-1" type = "radio" name="selectedOption" value="Full Time" checked = {props.selectedOption === 'Full Time'}onClick={props.updateSearch}/>
            View Full Time Employees
        </label>
        <label className="mx-4" >
          <input className="mr-1" type = "radio" name="selectedOption" value="Part Time" checked = {props.selectedOption === 'Part Time'}onClick={props.updateSearch}/>
            View Part Time Employees
        </label>
    </form>
  );
}

export default RadioOptions;