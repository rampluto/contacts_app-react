import React from "react";
import Card from "./card";
import Contacts from "../contacts"

function App(){
    return <div>
    <h1>My Contacts</h1>
    <Card name=  {Contacts[0].name}
          image= {Contacts[0].image}
          phone= {Contacts[0].phone}
          email= {Contacts[0].email}
     />

    <Card name=  {Contacts[1].name}
          image= {Contacts[1].image}
          phone= {Contacts[1].phone}
          email= {Contacts[1].email}
     />
  </div>
}

export default App;