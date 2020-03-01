import React, { Component } from "react";
import EmpInfo from "./components/EmployeeInfo";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";

class App extends Component {

  state = {
    employees
  };

  render() {
    return (
      <div>
    <Wrapper>
        {this.state.employees.map(employee => (
         <EmpInfo
            id={employee.id}
            key={employee.id}
            firstName={employee.firstName}
            lastName= {employee.lastName}
            department={employee.department}
            empType={employee.empType}
          />
        ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
