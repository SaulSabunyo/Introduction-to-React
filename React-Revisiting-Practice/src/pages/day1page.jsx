import React from "react";
import Form from "../Form";
import image from ".././assets/Saul.jpg"
import '../App.css';
function Day1page() {
      let Myname = "Sabunyo Saul"
  return (
    <div>
      <h1>Hello, React!</h1>
      //inline styling method of css
      {/* <h1 style={{color:"orangered", textAlign:"center", fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", marginTop:"20px", textShadow:"2px 2px 4px #aaa", padding:"20px"}}>Hello, React!</h1> */}
      <p style={{textDecoration:"underline"}}>This is my journey into the React World.</p>
      <p>My Name is {Myname}</p>
      <p>I am enjoying learning React!</p>
      <Form />
      <img src={image} alt="Saul" />
    </div>
  );
}
export default Day1page;