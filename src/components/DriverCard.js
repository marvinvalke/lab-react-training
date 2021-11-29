//import React from 'react'

import Rating from './Rating';

function DriverCard(props) {
  return (
    <div>
      <h6>{props.name}</h6>
      <Rating>{props.rating}</Rating>
      <span>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </span>
    </div>
  );
}

export default DriverCard;
