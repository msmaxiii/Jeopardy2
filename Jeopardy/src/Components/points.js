import { Component } from "react";


const points =(props)=>{
    return(
        <div>
           <h4>Points: {props.question.value}</h4> 
        </div>
        
    )
}

export default points;