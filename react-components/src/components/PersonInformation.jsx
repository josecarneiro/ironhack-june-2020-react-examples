import React from 'react';
import './PersonInformation.css';

const PersonInformation = ({ name, location, color, birthdate, hasDyedHair, pets }) => {
  return (
    <div className="person">
      <h3>{name}</h3>
      <p>Location: {location}</p>
      <strong style={{ color: color }}>Favorite color: {color}</strong>
      <br />
      <small>Date of Birth: {birthdate.toString()}</small>
      <br />
      <span>{pets}</span>
      <br />
      <span>This person {hasDyedHair ? 'has' : "hasn't"} dyed their hair</span>
    </div>
  );
};

// const PersonInformation = props => {
//   return (
//     <div className="person">
//       <h3>{props.name}</h3>
//       <p>Location: {props.location}</p>
//       <strong style={{ color: props.color }}>Favorite color: {props.color}</strong>
//       <br />
//       <small>Date of Birth: {props.birthdate.toString()}</small>
//       <br />
//       <span>{props.pets}</span>
//       <br />
//       <span>This person {props.hasDyedHair ? 'has' : "hasn't"} dyed their hair</span>
//     </div>
//   );
// };

// With node, we'd export the component like this:
// module.exports = PersonInformation;
// With react, we do it like this:
export default PersonInformation;
