import React, { Component } from "react";
import EmpInfo from "./components/EmployeeInfo";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import employees from "./employees.json";

class App extends Component {

  state = {
    employees,
    search: "",
    selectedOption: 'all'
  };

  updateSearch = e => {
    this.setState({
      search: e.target.value,
      selectedOption: e.target.value
    });
  };

  

  render() {
    let filteredEmps = this.state.employees.filter(
      (employee) => {
        return employee.name.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1;      
    }
    );
    
    return (
      // search bar
      <div>
    <input type='text' onChange={this.updateSearch}/>
    {/* *********************************************/}

    {/* Radio Buttons */}
    <form>      
        <label>
          <input type = "radio" value="all" checked = {this.state.selectedOption === 'all'} onClick={this.updateSearch}/>
            View All Employees
        </label>
        <label>
          <input type = "radio" value="full" checked = {this.state.selectedOption === 'full'}onClick={this.updateSearch}/>
            View Full Time Employees
        </label>
        <label>
          <input type = "radio" value="part" checked = {this.state.selectedOption === 'part'}onClick={this.updateSearch}/>
            View Part Time Employees
        </label>
    </form>
    
    {/* ****************************************************** */}

    {/* List of Employees */}
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
      {/* *********************************************************** */}
      </div>
    );
  }
}

export default App;
