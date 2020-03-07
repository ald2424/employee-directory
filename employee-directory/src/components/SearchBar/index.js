import React from "react";

function searchBar(props){

    return(
        
        <div className=" text-center mx-4 my-3">
          <span>Search: </span>
        <input type='text' size="85" name="search" onChange={props.updateSearch}/>
      </div>
        
    )

}
export default searchBar;