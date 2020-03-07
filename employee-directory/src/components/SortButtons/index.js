import React from "react";

function sortButtons(props){

    return(
        
        <div className="text-center">
        <button className="mx-4" onClick={props.sortFirstName}>Sort By First Name</button>
        <button onClick={props.sortLastName}>Sort By Last Name</button>
      </div>
        
    )

}
export default sortButtons;
       
       
       
       