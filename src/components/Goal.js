import React from "react";
import Form from "./Form";

export default function Goal(props) {
  return (
    <div className="message">
        {props.goalMessage && <h1>{props.name}, your daily calorie goal is {" "}
        {props.gender === "male" && (Math.round(10*props.weight + 6.25*props.height+5*props.age + 5))} 
        {props.gender === "female" && (Math.round(10*props.weight + 6.25*props.height+5*props.age - 161)) }</h1>}
      
      </div>
 
  ) 
}
