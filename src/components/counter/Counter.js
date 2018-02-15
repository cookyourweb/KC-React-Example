import React, {Component} from 'react';


class Counter extends Component{
  constructor(props){
    super(props);

    this.state = {
        counter: 0
    };
}
    onCounterMore() {
      this.setState({
        counter: this.state.counter +1
      });

    }
    onCounterLess(){
        this.setState({
          counter: this.state.counter -1
        });
  
      }


  

render() {

    return (
    <div style={{margin: '0 auto'}}>
      <button type="button" className="btn btn-secondary" onClick={this.onCounterMore.bind(this)} >Sumar</button>
      <p style = {{margin: '10px auto'}}>{this.state.counter}</p>
      <button type="button" className="btn btn-secondary" onClick={this.onCounterLess.bind(this)}>Restar</button>

    </div>
   
    );
  }
    
}
export default Counter;