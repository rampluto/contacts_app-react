import React from "react";
import Info from "./info";

function Card(props){
    return <div className="card">
      <h2>{props.name} </h2>
      <img src={props.image} alt="Avatar_img" />
      <Info/>
    </div>
  }

  export default Card;
  