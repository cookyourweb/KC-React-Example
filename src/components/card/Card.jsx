import React from 'react';
import PropTypes from 'prop-types';

const Card = props => (


<div className="row">
        <div className="col-lg-3">

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

Card.propTypes ={
photo:PropTypes.string,
name: PropTypes.string,
description: PropTypes.string
};


Card.defaultProp ={
    photo:'',
    name: 'no-name',
    description: 'no-description'
    };
    