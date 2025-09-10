import React from "react";
import Form from "./form";
function App(){
  let Myname = "Sabunyo Saul"
  return (
    
    <div>
      <h1>Hello, React!</h1>
      <p>This is my journey into the React World.</p>
      <p>My Name is {Myname}</p>
      <p>I am enjoying learning React!</p>
      <Form />
    </div>
  );
}
export default App;