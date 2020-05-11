import React from "react";
import Info from "./info";
import Avatar from "./avatar";

function Card(props){
    return <div className="card">
      <h2>{props.name} </h2>
      <Avatar image={props.image}/>
      <Info phone={props.phone} email={props.email}/>
    </div>
  }

  export default Card;
  