import React, {Component} from 'react';


class Counter extends Component{
render() {

    return (
    <div style={{margin: '0 auto'}}>
    <button type="button" className="btn btn-secondary">Sumar</button>
   <p style = {{margin: '10px auto'}}>0</p>
    <button type="button" className="btn btn-secondary">Restar</button>

   </div>
   
    )
}
    
}
export default Counter;