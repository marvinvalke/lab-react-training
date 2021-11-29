/* import React from 'react' */

function IdCard(props) {
  console.log(props.birth);

  return (
    <div>
      <img src={props.picture} alt="userPics" />
      <p>First Name:{props.firstName}</p>
      <p>Last Name:{props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}cm</p>
      <p> Birth: {props.birth.toLocaleDateString()} </p>
    </div>
  );
}

export default IdCard;
