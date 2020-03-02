import React from "react";

function searchBar(props){

    return(
        
        <div>
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          placeholder="Search for an Employee"
          id="search"
        />
      </div>
        
    )

}
export default searchBar;