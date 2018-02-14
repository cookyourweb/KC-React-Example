import React from 'react';

const Card = props => (

<div className="container">
        <div className="col">

            <div className="card" style={{width: '18rem', margin: '0 auto'}}>

                <img className="img-fluid" src={props.photo} alt="card-foto"></img>
                <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                </div>
                

                <p className="card-text">{props.description}</p>



            </div>



        </div>
        
      
        </div>    

       
);
export default Card;
