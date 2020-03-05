import React, { Component } from "react";
import EmpInfo from "./components/EmployeeInfo";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import RadioOptions from "./components/RadioOptions";
import employees from "./employees.json";

class App extends Component {

  state = {
    employees,
    search: "",
    selectedOption: 'all',
  };

  updateSearch = e => {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  sort = e => {
    let copy = [...this.state.employees];
    copy.sort((a,b)=>{
      var nameA = a.name.toUpperCase(); 
      var nameB = b.name.toUpperCase(); 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    })
    this.setState({employees: copy})
  }


  render() {
    let filteredEmps = this.state.employees.filter(
      (employee) => {
        let checked;
        if(this.state.selectedOption === "all" || this.state.selectedOption === employee.empType) checked = true;
        else checked = false;

        //let checked = this.state.selectedOption === "all" || this.state.selectedOption === employee.empType

        return employee.name.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1 && checked;      
    }
    );
    
    return (
      // search bar
      <div>
        <button onClick={this.sort}>Sort</button>
    <input type='text' name="search" onChange={this.updateSearch}/>
    {/* *********************************************/}

    {/* Radio Buttons */}
    <RadioOptions
      selectedOption={this.state.selectedOption}
      updateSearch = {this.updateSearch}
    />
    
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
