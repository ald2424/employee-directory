import React, { Component } from "react";
import EmpInfo from "./components/EmployeeInfo";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SearchBar";
import RadioOptions from "./components/RadioOptions";
import SortButtons from "./components/SortButtons";
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

  sortFirstName = e => {
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

  sortLastName = e => {
    let copy = [...this.state.employees];

    copy.sort((a,b)=>{

      let aFirst = a.name.split(" ");
      let bFirst = b.name.split(" ");
      let aLast = aFirst[aFirst.length -1];
      let bLast = bFirst[bFirst.length -1];

      if(aLast < bLast) return -1;
      if(aLast > bLast) return 1;
      return 0;
    })
    this.setState({employees: copy})
  }


  render() {

    // allows the search bar and radio buttons to work
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
      <div>
        <SortButtons
         sortFirstName={this.sortFirstName}
         sortLastName={this.sortLastName}
       />

        <SearchBar
         updateSearch={this.updateSearch}
        />

        <RadioOptions
         selectedOption={this.state.selectedOption}
          updateSearch = {this.updateSearch}
        />
    
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
