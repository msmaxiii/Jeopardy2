import { Component } from "react";


const category =(props)=>{
    return(
        <div>
           <h1>Category: {props.question.category.title}</h1>
        </div>
        
    )
}

export default category ;