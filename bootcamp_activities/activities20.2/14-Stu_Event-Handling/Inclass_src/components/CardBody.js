import React from 'react';
import Button from './Button';

// Add a comment explaining what is being passed to this "child" component as props
// count, handleIncrement, handleDecrement props are being passed IN as props
function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>
      <Button handleCount={props.handleIncrement}>Increment</Button>
      {' '}
      <Button handleCount={props.handleDecrement}>Decrement</Button>
    </div>
  );
}

export default CardBody;
