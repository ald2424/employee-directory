import React from "react";
//import "./style.css";

function EmpInfo(props) {
  return (
    <div>
      <div>
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.department}
          </li>
          <li>
            <strong>Employment Type:</strong> {props.empType}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmpInfo;