
import { Component } from 'react';


class Score extends Component{
    state ={
        score: 0
    }

handleIncrease =()=>{
    this.setState({score:this.state.score + this.props.question.value})
}
handleDecrease =()=>{
    this.setState({score:this.state.score - this.props.question.value})

}
handleReset=()=>{
    this.setState({score: 0})
}
render(){
    return(
        <div>
            <h2>{this.state.score}</h2>

            <button id>   
            <button onClick ={ this.handleIncrease}>Increase</button>
            </button>

            <button>
            <button onClick ={ this.handleDecrease}>Decrease</button>
            </button>

            <button>
            <button onClick ={this.handleReset}>Reset</button>
            </button>

        </div>
    )
}
}
export default Score;