import React from "react";

function searchBar(props){

    return(
        
        <div>
        <input type='text' name="search" onChange={props.updateSearch}/>
      </div>
        
    )

}
export default searchBar;