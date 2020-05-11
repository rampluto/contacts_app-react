import React from "react";
import Card from "./card";
import Contacts from "../contacts";
import Avatar from "./avatar";
function App(){
    return <div>
    <h1>My Contacts</h1>
    <Avatar image="https://i.pinimg.com/236x/04/56/86/0456869906dfa906c494b2b63aa67f2a.jpg"/>
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