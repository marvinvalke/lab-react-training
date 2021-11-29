//import React from 'react'

function CreditCard(props) {
  let last4 = '....' + ' ....' + ' .... ' + props.number.slice(-4);
  let exp =
    props.expirationMonth + '/' + props.expirationYear.toString().slice(-2);
 

  const divStyle = {
    display: `flex`,
    flexDirection: `column`,
    color: `${props.color}`,
    backgroundColor: `${props.bgColor}`,
    width: '200px',
  };

  return (

      <div style={divStyle}>
        <h5>{last4}</h5>
        <p>{exp}</p>
      </div>
  );
}

export default CreditCard;
