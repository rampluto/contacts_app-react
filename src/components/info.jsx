import React from "react";

function Info(props){
    return <div>
        <p className="info">{props.phone}</p>
        <p className="info">{props.email}</p>
    </div>
}

export default Info;