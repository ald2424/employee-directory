import React, { Component } from "react";
import EmpInfo from "./components/EmployeeInfo";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import employees from "./employees.json";

class App extends Component {

  state = {
    employees,
    search: ""
  };

  updateSearch = e => {
    this.setState({
      search: e.target.value
    });
  };


  render() {
    let filteredEmps = this.state.employees.filter(
      (employee) => {
        return employee.name.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) != -1;
      }
    );
    return (
      <div>
    {/* <SearchBar search={this.state.search}
          handleInputChange={this.handleInputChange}/> */}
    <input type='text' onChange={this.updateSearch}/>
    <Wrapper>
        {filteredEmps.map(employee => (
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
