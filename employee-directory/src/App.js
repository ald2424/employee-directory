import React, { Component } from "react";
import EmpInfo from "./components/EmployeeInfo";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import employees from "./employees.json";

class App extends Component {

  state = {
    employees,
    input:''
  };


  render() {
    
    return (
      <div>
    <SearchBar employees={this.state.input}/>
    <Wrapper>
        {this.state.employees.map(employee => (
         <EmpInfo
            id={employee.id}
            key={employee.id}
            name={employee.name}
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
