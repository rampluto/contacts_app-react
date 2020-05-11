import React from "react";

function Card(props){
    return <div className="card">
      <h2>{props.name} </h2>
      <img src={props.image} alt="Avatar_img" />
      <p className="info">{props.phone}</p>
      <p className="info">{props.email}</p>
    </div>
  }

  export default Card;
  