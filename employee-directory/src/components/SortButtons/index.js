import React from "react";

function sortButtons(props){

    return(
        
        <div>
        <button onClick={props.sortFirstName}>Sort By First Name</button>
        <button onClick={props.sortLastName}>Sort By Last Name</button>
      </div>
        
    )

}
export default sortButtons;
       
       
       
       