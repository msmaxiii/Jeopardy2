
import { Component } from 'react';
import './App.css';
import Question from './Components/questions';
import Category from './Components/category';
import Points from './Components/points';
import Score from './Components/score';

class App extends Component {
    state = {
    question:{},
    count: 0,
    isHidden: true
  }

async componentDidMount(){
  try{
    const res = await fetch('http://jservice.io/api/random')
    const data= await res.json();
    this.setState({question:data[0]});
    console.log(this.state.question)
  }  
    catch(error) {
      console.log(error);
    }
}

  handleGetquestion = async ()=>{
    try{
   const res = await fetch('http://jservice.io/api/random')
   const data= await res.json();
   this.setState({question:data[0]})
  //  console.log(this.state.question.question)
  }
  catch(error){
    console.log(error)
  }
  }
 

render(){
  
    
  return (
    <div className ="">
        <h1>Welcome to Jeopardy</h1>
        <button onClick={this.handleGetquestion}>Get Question</button>
        
      
    <div>
  {this.state.question&&<Question question={this.state.question}/>}
  {/* {this.state.question&&<Category question={this.state.question}/>} */}
  {this.state.question&&<Points question={this.state.question}/>}
  {this.state.question&&<Score question={this.state.question}/>}
    </div>

    <div>
      <h3>Score:</h3>
      
     
  
      <h3>Answer:{this.state.question.answer}</h3> 
      
      <button onClick={this.handleClicktoRevalQuestion}>Click to Reveal Question</button>
    </div>

    </div>  

  );
  }
}
export default App;
