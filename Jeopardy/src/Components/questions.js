import { Component } from "react";


const question =(props)=>{
    return(
        <div>
            <h1>Question</h1>
            <h2>{props.question.question}</h2>
            
            
        </div>
        
    )
}

export default question;