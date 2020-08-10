import React from 'react';

// function PetInformation(props) {}

const PetInformation = props => {
  let color;

  switch (props.breed) {
    case 'dog':
      color = 'brown';
      break;
    case 'cat':
      color = 'yellow';
      break;
    default:
      color = 'pink';
  }

  return (
    <div style={{ backgroundColor: color }}>
      <h4>{props.name}</h4>
      <p>Breed: {props.breed}</p>
      <span>Additional Information: </span>
      <div>{props.children}</div>
    </div>
  );
};

// module.exports = PetInformation;
export default PetInformation;

// exports.foo = 'bar';
// export const foo = 'bar';
// const foo = 'bar';
// export { foo };
